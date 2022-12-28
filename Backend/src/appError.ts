class AppError extends Error {
  status: number;

  constructor(name: string, httpCode?: number, description?: string) {
    super(description);

    this.name = name;
    this.status = httpCode || 500;
  }
}

export { AppError };
