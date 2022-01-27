export const basicResources = ['stone','clay','wood'] as const
export type BasicResource=typeof basicResources[number];
export const elaborateResources = ['papyrus','glass'] as const
export type ElaborateResource=typeof elaborateResources[number];
export const resources = [ ...basicResources, ...elaborateResources]
export type Resource = typeof resources[number];