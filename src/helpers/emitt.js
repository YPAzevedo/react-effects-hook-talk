export default function emitt() {
  const eventsSubscriptions = new Map();

  function on(eventName, callback) {
    if (!eventsSubscriptions.has(eventName)) {
      eventsSubscriptions.set(eventName, new Set());

      eventsSubscriptions.get(eventName).add(callback);
    } else {
      eventsSubscriptions.get(eventName).add(callback);
    }

    return {
      off: () => off(eventName, callback)
    };
  }

  function off(eventName, callback) {
    if (!eventsSubscriptions.has(eventName)) {
      throw new Error("No event with this name is registered");
    }
    eventsSubscriptions.get(eventName).delete(callback);
  }

  function emit(eventName, value) {
    if (eventsSubscriptions.has(eventName)) {
      eventsSubscriptions.get(eventName).forEach((fn) => fn(value));
    }
    if (eventsSubscriptions.has("*"))
      eventsSubscriptions.get("*").forEach((fn) => fn(eventName, value));
  }

  function all() {
    return eventsSubscriptions;
  }

  return {
    on,
    off,
    emit,
    all
  };
}
