export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const;

export type ToastVariant = typeof VARIANT_OPTIONS[number];
export type ToastType = { variant: ToastVariant, message: string, id: string };
