import * as vscode from 'vscode';
import { DrawCards } from './drawCards';
import { askQuestions } from './askQuestions'

export function activate(context: vscode.ExtensionContext) {
	const drawCards = vscode.commands.registerCommand('tarot.today', () => {
		DrawCards.show(context);
	});

	const showInput = vscode.commands.registerCommand('tarot.ask', () => {
		askQuestions(context);
	});

	context.subscriptions.push(showInput);
	context.subscriptions.push(drawCards);

}


export function deactivate() { }