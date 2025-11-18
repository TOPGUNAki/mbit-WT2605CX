//% color=#00AACC icon=""
namespace WT2605CX{
let _initialized = false

    /**
     * WT2605CX モジュールを UART で初期化する
     * TX/RX はモジュールに接続したピンを選択してください
     */
    //% block="WT2605CX を初期化 TX %tx RX %rx"
    //% tx.defl=SerialPin.P1
    //% rx.defl=SerialPin.P2
    export function init(
        tx: SerialPin,
        rx: SerialPin,
    ): void {
        // micro:bit のシリアル出力を指定ピンにリダイレクト
        serial.redirect(
            tx,
            rx,
            BaudRate.BaudRate115200
        )

        // 余裕を見て少し待つ（モジュール起動待ちなど）
        basic.pause(100)

        _initialized = true
    }
}

