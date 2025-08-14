"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { suggestToolFromClipboard, type SuggestToolFromClipboardOutput } from "@/ai/flows/suggest-tool-from-clipboard";
import { Loader, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function SmartSuggestion() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<SuggestToolFromClipboardOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSuggestTool = async () => {
    setIsLoading(true);
    setSuggestion(null);

    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available.");
      }
      const clipboardText = await navigator.clipboard.readText();
      if (!clipboardText.trim()) {
        throw new Error("Your clipboard is empty.");
      }

      const result = await suggestToolFromClipboard({ clipboardContent: clipboardText });
      setSuggestion(result);
      setIsDialogOpen(true);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.message.includes('Read permission denied')
        ? 'Clipboard permission denied. Please allow access to use this feature.'
        : error.message;

      toast({
        variant: "destructive",
        title: "Suggestion Failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="mt-6 shadow-md rounded-xl border-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="text-primary h-6 w-6" />
            Smart Suggestion
          </CardTitle>
          <CardDescription>
            Not sure which tool to use? Let AI help!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Click below to get a tool suggestion based on your clipboard's content.</p>
          <Button onClick={handleSuggestTool} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Suggest from clipboard
              </>
            )}
          </Button>
        </CardContent>
      </Card>


      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tool Suggestion</AlertDialogTitle>
            <AlertDialogDescription>
              Based on your clipboard content, we suggest the following tool:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="my-4">
            <p className="font-bold text-lg text-primary">{suggestion?.suggestedTool}</p>
            <p className="mt-2 text-muted-foreground">{suggestion?.reason}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
