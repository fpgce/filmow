let navigationRef = null;

export function setNavigationRef(ref) {
  navigationRef = ref;
}

export function getNavigationRef() {
  return navigationRef;
}

export function navigate({ name, params }) {
  navigationRef?.navigate(name, params);
}

export function goBack() {
  navigationRef?.goBack();
}
