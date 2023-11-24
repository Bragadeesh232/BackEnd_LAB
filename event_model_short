class EventEmitter {
    constructor() {
      this.listeners = {};
    }
  
    on(eventName, fn) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
      return this;
    }
  
    once(eventName, fn) {
      const onceWrapper = () => {
        fn();
        this.off(eventName, onceWrapper);
      };
      this.on(eventName, onceWrapper);
      return this;
    }
  
    off(eventName, fn) {
      let lis = this.listeners[eventName];
      if (!lis) return this;
      this.listeners[eventName] = lis.filter((listener) => listener !== fn);
      return this;
    }
  
    emit(eventName, ...args) {
      let fns = this.listeners[eventName];
      if (!fns) return false;
      fns.forEach((f) => f(...args));
      return true;
    }
  
    listenerCount(eventName) {
      return (this.listeners[eventName] || []).length;
    }
  
    rawListeners(eventName) {
      return this.listeners[eventName] || [];
    }
  }
  
  // Example usage:
  const myEmitter = new EventEmitter();
  myEmitter.on('eventOne', () => console.log('an event occurred!'));
  myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
  myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));
  
  myEmitter.emit('eventOne');
  myEmitter.emit('eventOnce');
  myEmitter.emit('eventOne');
  
  console.log(myEmitter.listenerCount('eventOne'));
  console.log(myEmitter.rawListeners('eventOne'));
