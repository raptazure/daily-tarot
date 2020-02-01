import * as vscode from 'vscode';
import { DrawCards } from './drawCards'

export async function askQuestions(context: vscode.ExtensionContext) {
  const result = await vscode.window.showInputBox({
    placeHolder: 'Please enter the question you want to ask.',
  });
  vscode.window.showInformationMessage(`Drawing a Card for you🔮: ${result}`);
  setTimeout(() => DrawCards.show(context), 3599);

}

