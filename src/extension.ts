import * as vscode from 'vscode';
import { DrawCards } from './drawCards';
import { askQuestions } from './askQuestions';
import { dailyTarot } from './dailyTarot';

export function activate(context: vscode.ExtensionContext) {
	const tarotToday = vscode.commands.registerCommand('tarot.today', () => {
		dailyTarot(context);
	});

	const tarotAsk = vscode.commands.registerCommand('tarot.ask', () => {
		askQuestions(context);
	});

	context.subscriptions.push(tarotAsk);
	context.subscriptions.push(tarotToday);

}


export function deactivate() { }