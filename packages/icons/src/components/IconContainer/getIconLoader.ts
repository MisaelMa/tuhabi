import { ComponentType, lazy, LazyExoticComponent } from 'react';

/**
 * Get dynamically icon by name to web
 *
 * @param iconName - name of icon to load
 */
export function getIconLoader<T>(
  iconName: string
): LazyExoticComponent<ComponentType<T>> {
  return lazy(
    async () =>
      (await import(`../../icons/${iconName}`)) as {
        default: ComponentType<T>;
      }
  );
}
