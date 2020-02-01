import * as vscode from 'vscode';
import { DrawCards } from './drawCards'

export async function askQuestions(context: vscode.ExtensionContext) {
  const question = await vscode.window.showInputBox({
    placeHolder: 'Please enter the question you want to ask.',
  });

  if (question !== undefined && question !== '') {
    vscode.window.showInformationMessage(`Drawing a Card for you🔮: ${question}`);
    setTimeout(() => DrawCards.show(context), 3599);
  }
}