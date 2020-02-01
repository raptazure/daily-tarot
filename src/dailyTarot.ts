import * as vscode from 'vscode'
import { DrawCards } from './drawCards'
import { tarotDict } from './tarotDict'

let statusBar: vscode.StatusBarItem | undefined;

export function dailyTarot(context: vscode.ExtensionContext) {
  DrawCards.show(context);

  const index = String(DrawCards.selector);
  vscode.window.showInformationMessage(`${tarotDict[index]}`);

  if (statusBar !== undefined) {
    statusBar.text = "🔮Daily Card: " + tarotDict[index];
  } else {
    statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.text = "🔮Daily Card: " + tarotDict[index];
    statusBar.show();

    // single click
    statusBar.command = 'tarot.ask';
  }
}
