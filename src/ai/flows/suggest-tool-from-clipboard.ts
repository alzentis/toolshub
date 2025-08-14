'use server';
/**
 * @fileOverview AI agent that suggests the most relevant tool based on clipboard content.
 *
 * - suggestToolFromClipboard - Function to analyze clipboard content and suggest a tool.
 * - SuggestToolFromClipboardInput - Input type for suggestToolFromClipboard.
 * - SuggestToolFromClipboardOutput - Return type for suggestToolFromClipboard.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestToolFromClipboardInputSchema = z.object({
  clipboardContent: z
    .string()
    .describe('The content of the user\'s clipboard.'),
});
export type SuggestToolFromClipboardInput = z.infer<typeof SuggestToolFromClipboardInputSchema>;

const SuggestToolFromClipboardOutputSchema = z.object({
  suggestedTool: z.string().describe('The name of the suggested tool.'),
  reason: z
    .string()
    .describe('The reasoning behind the tool suggestion.'),
});
export type SuggestToolFromClipboardOutput = z.infer<typeof SuggestToolFromClipboardOutputSchema>;

export async function suggestToolFromClipboard(input: SuggestToolFromClipboardInput): Promise<SuggestToolFromClipboardOutput> {
  return suggestToolFromClipboardFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestToolFromClipboardPrompt',
  input: {schema: SuggestToolFromClipboardInputSchema},
  output: {schema: SuggestToolFromClipboardOutputSchema},
  prompt: `You are a tool suggestion expert. Analyze the content of the user's clipboard and suggest the most relevant tool from the available tools. Explain your reasoning for the suggestion.

Clipboard Content: {{{clipboardContent}}}

Suggest a tool and explain why it is the most relevant.`,
});

const suggestToolFromClipboardFlow = ai.defineFlow(
  {
    name: 'suggestToolFromClipboardFlow',
    inputSchema: SuggestToolFromClipboardInputSchema,
    outputSchema: SuggestToolFromClipboardOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
