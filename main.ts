//% color=#ff8000 icon="\uf001"
//% block="WT2605CX"
namespace WT2605CX {

    /**
     * トラック番号を指定して再生
     */
    //% block="WT2605CX トラック %track を再生"
    //% track.min=1 track.max=255
    export function play(track: number): void {
        // ここに実際の送信処理を書く
    }
}

//% color=#00AACC icon=""
namespace myext {

    /* *
     * Hello を返す最小ブロック
     */
    //% block="hello"
    export function hello(): string {
        return "Hello";
    }
}

