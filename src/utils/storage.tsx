class StorageService {
    private namespace = 'panda_';
    private storage: any = localStorage;

    public set(key: string, value: any) {
        this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
    }

    public put(key: string, value: any) {
        if (!this.get(key)) {
            this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
        } else {
            return false;
        }
    }

    public get(key: string) {

        const value = this.storage.getItem(`${this.namespace}${key}`);

        try {
            return JSON.parse(value);
        } catch (err) {
            return value || null;
        }
    }

    public delete(key: string) {
        this.storage.removeItem(`${this.namespace}${key}`);
    }

    public clear() {
        /** TODO: Remove only namespaced keys */
        // this.storage.clear();
    }
}

const storageService = new StorageService();
export default storageService;