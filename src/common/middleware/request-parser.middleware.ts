import { Injectable, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

export type ParsedRequest = {
  method: string;
  url: string;
  ip?: string;
  userAgent?: string;
  query: unknown;
  params: unknown;
  body: unknown;
};

@Injectable()
export class RequestParserMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const parsed: ParsedRequest = {
      method: req.method,
      url: req.originalUrl ?? req.url,
      ip: req.ip,
      userAgent: req.get('user-agent') ?? undefined,
      query: req.query,
      params: req.params,
      body: req.body,
    };
    console.log('parsed', parsed);

    // Attach for downstream handlers (controllers/services) if needed.
    (req as any).parsedRequest = parsed;

    // Basic request log. (Avoid logging secrets in production.)
    // eslint-disable-next-line no-console
    console.log('[request]', parsed);

    next();
  }
}

