import * as vscode from 'vscode';
import { DailyTarot } from './daily-tarot';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('tarot.today', () => {
		DailyTarot.show(context);
	}));

}


export function deactivate() { }