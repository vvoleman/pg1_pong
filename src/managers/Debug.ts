export interface DebugRow {
    [key: string]: any
}

export default class Debug {

    private static instance: Debug

    private constructor() {
    }

    public static getInstance(): Debug {
        if (!Debug.instance) {
            Debug.instance = new Debug()
        }
        return Debug.instance
    }

    public remove(id: string): void {
        const element = document.getElementById(id)
        if (element) {
            element.remove()
        }
    }

    public exists(id: string): boolean {
        return !!document.getElementById(id)
    }

    public debug(id: string, data: Array<DebugRow>): void {
        const table = this.createDebugTable(id, data)
        let element = document.getElementById(id)
        if (!element) {
            element = document.createElement('div')
            element.id = id
            document.getElementById('debug')!.appendChild(element)
        }

        element.innerHTML = table
    }

    private createDebugTable(id: string, data: Array<DebugRow>): string {
        let div = `<div><b>${id}<br></b>`
        for (let key in data) {
            div += `${key}: ${data[key]}<br>`
        }

        return div
    }


}