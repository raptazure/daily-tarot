import * as vscode from 'vscode';
import { askQuestions } from './askQuestions';
import { dailyTarot } from './dailyTarot';
import { showSpread } from './cardSpread';

export function activate(context: vscode.ExtensionContext) {
	const tarotToday = vscode.commands.registerCommand('tarot.today', () => {
		dailyTarot(context);
	});

	const tarotAsk = vscode.commands.registerCommand('tarot.ask', () => {
		askQuestions(context);
	});

	const cardSpread = vscode.commands.registerCommand('tarot.vision', () => {
		showSpread(context);
	})

	context.subscriptions.push(tarotAsk);
	context.subscriptions.push(tarotToday);
	context.subscriptions.push(cardSpread);
}


export function deactivate() { }