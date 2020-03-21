import * as vscode from 'vscode'
import * as path from 'path';
import * as fs from 'fs';

const visionSpread = (context: vscode.ExtensionContext, selector) => {
  let panel: vscode.WebviewPanel | undefined;
  panel = vscode.window.createWebviewPanel('visionSpread', 'The Vision', vscode.ViewColumn.Two, {});
  if (panel !== undefined) {
    const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'src', 'pages', `${selector}.html`));
    panel.webview.html = fs.readFileSync(filePath.fsPath, 'utf8');
  }

  panel.onDidDispose(() => this.panel = undefined);
}

export async function showSpread(context: vscode.ExtensionContext) {
  let selector: number;
  selector = -1 + Math.floor(Math.random() * 79);
  const question = await vscode.window.showInputBox({
    placeHolder: 'Please enter the question you want to ask.'
  })
  if (question !== undefined && question !== '') {
    vscode.window.showInformationMessage(`Drawing Three Cards for you🔮: ${question}`);
    setTimeout(() => visionSpread(context, selector), 3599);
    let selectorOne = -1 + Math.floor(Math.random() * 79);
    while(selectorOne === selector) {
      selectorOne = -1 + Math.floor(Math.random() * 79);
    }
    setTimeout(() => visionSpread(context, selectorOne), 4599);
    let selectorTwo = -1 + Math.floor(Math.random() * 79);
    while(selectorTwo === selector || selectorTwo === selectorOne) {
      selectorTwo = -1 + Math.floor(Math.random() * 79);
    }
    setTimeout(() => visionSpread(context, selectorTwo), 5599);
  }
}