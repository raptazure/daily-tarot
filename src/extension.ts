import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

	let currentPanel: vscode.WebviewPanel | undefined = undefined
	context.subscriptions.push(
		vscode.commands.registerCommand('tarot.today', () => {
			const columnToShowIn = vscode.window.activeTextEditor ?
				vscode.window.activeTextEditor.viewColumn : undefined

			if (currentPanel) {
				currentPanel.reveal(columnToShowIn)
			} else {
				currentPanel = vscode.window.createWebviewPanel(
					'dailyTarot',
					'Daily Tarot',
					vscode.ViewColumn.Two,
					{}
				)

				const selector: number = Math.ceil(Math.random() * 2)

				if (currentPanel !== undefined) {
					const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'src', 'pages', `${selector}.html`))
					currentPanel.webview.html = fs.readFileSync(filePath.fsPath, 'utf8')
				}

				currentPanel.onDidDispose(
					() => {
						currentPanel = undefined
					},
					null,
					context.subscriptions
				)

			}
		})
	)
}



export function deactivate() { }