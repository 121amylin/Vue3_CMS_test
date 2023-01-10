

<template>
    <div>
        <div class="code">
            <mark>n-alert</mark>
            <mark>type="default | info | success | warning | error"</mark>
            <mark>放ICON：template #icon</mark>
            <mark>可關閉　closable</mark>
            <mark>沒有邊框 :bordered="false"</mark>
        </div>
        <n-space vertical :size="12">
            <n-alert title="Default 类型" type="default">
                <template #icon>
                    <n-icon>
                        <ios-airplane />
                    </n-icon>
                </template>
                Gee it's good to be back home
            </n-alert>
            <n-alert :bordered="false" title="Info 类型" type="info">
                Gee it's good to be back home
            </n-alert>
            <n-alert title="Success 类型" type="success">
                Leave it till tomorrow to unpack my case
            </n-alert>
            <n-alert title="Warning 类型" type="warning">
                Honey disconnect the phone
            </n-alert>
            <n-alert title="Error 类型" type="error">
                I'm back in the U.S.S.R.
            </n-alert>
        </n-space>
    </div>
</template>

