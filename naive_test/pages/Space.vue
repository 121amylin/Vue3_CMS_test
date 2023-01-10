<template>
    <a href="https://yogwang.site/2021/CSS-use-gap-in-flex-layout/" target="_blank">在 Flex 布局中使用 gap 属性</a>
    <hr>
    <div class="code">
        <mark>n-space</mark><br />
        <mark>justify="end | space-around | space-between | center"</mark><br />
        <mark>vertical</mark><br />
        <mark>size="'small' | 'medium' | 'large' | number | [number, number]"</mark>
        <div>
            display: flex;<br />
            flex-flow: row wrap;<br />
            justify-content: flex-start;<br />
            gap: 8px 12px;
        </div>
    </div>
    <n-space>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Long! Long! Cross the line!</n-button>
    </n-space>
    <n-space justify="start" size="small">
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
    </n-space>
    <n-space justify="start" size="medium">
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
    </n-space>
    <n-space justify="start" size="large">
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
    </n-space>
</template>
