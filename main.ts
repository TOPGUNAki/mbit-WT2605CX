//% color=#00AACC icon=""
namespace WT2605CX{
let _initialized = false

    /**
     * WT2605CX モジュールを UART で初期化する
     * TX/RX はモジュールに接続したピンを選択してください
     */
    //% block="WT2605CX を初期化 TX %tx RX %rx ボーレート %baud"
    //% tx.defl=SerialPin.P1
    //% rx.defl=SerialPin.P2
    //% baud.defl=BaudRate.BaudRate9600
    export function init(
        tx: SerialPin,
        rx: SerialPin,
        baud: BaudRate
    ): void {
        // micro:bit のシリアル出力を指定ピンにリダイレクト
        serial.redirect(
            tx,
            rx,
            baud
        )

        // 余裕を見て少し待つ（モジュール起動待ちなど）
        basic.pause(100)

        _initialized = true
    }
}

