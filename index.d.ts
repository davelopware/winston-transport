// Type definitions for winston-transport 3.0
// Project: https://github.com/winstonjs/winston-transport
// Definitions by: DABH <https://github.com/DABH>
// Definitions: https://github.com/winstonjs/winston-transport

/// <reference types="node" />

import * as stream from 'stream';
import * as logform from 'logform';

declare namespace TransportStream {
  interface TransportStreamOptions {
    format?: logform.Format;
    level?: string;
    handleExceptions?: boolean;

    log?(info: any, next: () => void): any;
    logv?(info: any, next: () => void): any;
    close?(): void;
  }
}

declare class TransportStream extends stream.Writable {
  public format?: logform.Format;
  public level?: string;
  public handleExceptions?: boolean;

  constructor(opts?: TransportStream.TransportStreamOptions);

  public log?(info: any, next: () => void): any;
  public logv?(info: any, next: () => void): any;
  public close?(): void;
}

export = TransportStream;
