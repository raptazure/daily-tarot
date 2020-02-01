import * as vscode from 'vscode'
import { DrawCards } from './drawCards'
import { tarotDict } from './tarotDict'

let statusBar: vscode.StatusBarItem | undefined;

export function dailyTarot(context: vscode.ExtensionContext) {
  DrawCards.show(context);
  vscode.window.showInformationMessage(`${DrawCards.selector}`);

  const index = String(DrawCards.selector);

  if (statusBar !== undefined) {
    statusBar.text = "🔮Daily Card: " + tarotDict[index];
  } else {
    statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.command = 'tarot.today';
    statusBar.text = "🔮Daily Card: " + tarotDict[index];
    statusBar.show();
  }
}
