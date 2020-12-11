let navigationRef = null;

export function setNavigationRef(ref) {
  navigationRef = ref;
}

export function navigate({name, params}) {
  navigationRef?.navigate(name, params);
}
