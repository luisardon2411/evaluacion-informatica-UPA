export class Logger {

  private getTimeStamp(): string {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const time = now.toLocaleTimeString('en-GB');
    return `${date} ${time}`;
  }

  private colorText(text: string, color: string): string {
    const colors: { [key: string]: string } = {
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      reset: '\x1b[0m'
    };
    return colors[color] + text + colors['reset'];
  }

  log(message: string): void {
    console.log(`${this.colorText('[ExpressJS]', 'green')} ${this.colorText('[INFO]', 'blue')} ${this.colorText(this.getTimeStamp(), 'cyan')} ${message}`);
  }

  error(message: string, trace?: string): void {
    console.error(`${this.colorText('[ExpressJS]', 'green')} ${this.colorText('[ERROR]', 'red')} ${this.colorText(this.getTimeStamp(), 'cyan')} ${message}`);
    if (trace) {
      console.error(this.colorText(trace, 'red'));
    }
  }

  warn(message: string): void {
    console.warn(`${this.colorText('[ExpressJS]', 'green')} ${this.colorText('[WARN]', 'yellow')} ${this.colorText(this.getTimeStamp(), 'cyan')} ${message}`);
  }

  debug(message: string): void {
    console.debug(`${this.colorText('[ExpressJS]', 'green')} ${this.colorText('[DEBUG]', 'magenta')} ${this.colorText(this.getTimeStamp(), 'cyan')} ${message}`);
  }

  verbose(message: string): void {
    console.log(`${this.colorText('[ExpressJS]', 'green')} ${this.colorText('[VERBOSE]', 'cyan')} ${this.colorText(this.getTimeStamp(), 'cyan')} ${message}`);
  }

  routesInfo(routes: { method: string, path: string }[]): void {
    routes.forEach(route => {
      this.log(`Ruta [${this.colorText(route.method, 'yellow')}] ${this.colorText(route.path, 'green')}`);
    });
  }
}
