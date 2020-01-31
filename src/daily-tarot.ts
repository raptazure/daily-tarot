import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class DailyTarot {

  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext, ) {
    const columnToShowIn = vscode.window.activeTextEditor ?
      vscode.window.activeTextEditor.viewColumn : undefined;

    if (this.panel) {
      this.panel.reveal(columnToShowIn);
    } else {
      this.panel = vscode.window.createWebviewPanel('dailyTarot', 'Daily Tarot', vscode.ViewColumn.Two, {});

      const selector: number = -1 + Math.floor(Math.random() * 23);

      if (this.panel !== undefined) {
        const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'src', 'pages', `${selector}.html`));
        this.panel.webview.html = fs.readFileSync(filePath.fsPath, 'utf8');
      }

      this.panel.onDidDispose(() => this.panel = undefined);
    }

  }

}