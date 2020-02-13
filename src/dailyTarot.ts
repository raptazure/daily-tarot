import * as vscode from 'vscode'
import { DrawCards } from './drawCards'
import { tarotDict } from './tarotDict'

let statusBar: vscode.StatusBarItem | undefined;

export function dailyTarot(context: vscode.ExtensionContext) {
  if (statusBar === undefined) {
    DrawCards.show(context);
    const index = String(DrawCards.selector);
    vscode.window.showInformationMessage(`${tarotDict[index]}`);

    statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.text = "🔮Daily Card: " + tarotDict[index];
    statusBar.show();
  } else {
    vscode.window.showInformationMessage(statusBar.text);
  }

  // single click
  if (statusBar !== undefined) {
    statusBar.command = 'tarot.ask';
  }
}
