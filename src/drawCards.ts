import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class DrawCards {

  private static panel: vscode.WebviewPanel | undefined;

  public static selector: number;

  public static show(context: vscode.ExtensionContext, ) {
    const columnToShowIn = vscode.window.activeTextEditor ?
      vscode.window.activeTextEditor.viewColumn : undefined;

    if (this.panel) {
      this.panel.dispose();
    }

    this.panel = vscode.window.createWebviewPanel('dailyTarot', 'Daily Tarot', vscode.ViewColumn.Two, {});
    DrawCards.selector = -1 + Math.floor(Math.random() * 79);

    if (this.panel !== undefined) {
      const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'src', 'pages', `${DrawCards.selector}.html`));
      this.panel.webview.html = fs.readFileSync(filePath.fsPath, 'utf8');
    }

    this.panel.onDidDispose(() => this.panel = undefined);
  }
}