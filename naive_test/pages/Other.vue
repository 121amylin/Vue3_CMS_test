<script setup>
import { GameControllerOutline, GameController, CashOutline } from '@vicons/ionicons5'
import Checkmark16Filled from "@vicons/fluent/Checkmark16Filled";
</script>


<template>
    <div>
        <mark>分割線</mark>
        <n-divider />
        <n-divider>
            🐼🐼🐼🐼🐼🐼
        </n-divider>
        <n-divider title-placement="left">
            🐼🐼🐼🐼🐼🐼
        </n-divider>
        这个<n-divider vertical />看起来<n-divider vertical />好像不是很显眼，额...
        <n-divider title-placement="right">
            🐼🐼🐼🐼🐼🐼
        </n-divider>

        <n-divider dashed>
            虚线
        </n-divider>


        <hr>

        <mark>文本省略</mark>
        <ClientOnly>
            <n-ellipsis style="max-width: 240px">
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
            </n-ellipsis>
        </ClientOnly>

        <!-- <div style="width:200px">
            <n-ellipsis >
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis :line-clamp="2">
                电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
                百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis>
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
                <template #tooltip>
                    <div style="text-align: center">
                        《秦皇岛》<br>住在我心里孤独的<br>孤独的海怪 痛苦之王<br>开始厌倦
                        深海的光 停滞的海浪
                    </div>
                </template>
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
                电灯熄灭 物换星移 泥牛入海<br>
                黑暗好像 一颗巨石 按在胸口<br>
                独脚大盗 百万富翁 摸爬滚打<br>
                黑暗好像 一颗巨石 按在胸口
            </n-ellipsis>
        </div> -->


        <hr>
        <mark>文本省略</mark>
        <p><n-gradient-text type="error">炸了</n-gradient-text></p>
        <p><n-gradient-text type="info">噢</n-gradient-text></p>
        <p><n-gradient-text type="warning">注意</n-gradient-text></p>
        <p><n-gradient-text type="success">成了</n-gradient-text></p>
        <p>
            <n-gradient-text :gradient="{ from: 'rgb(85, 85, 85)', to: 'rgb(170, 170, 170)' }">
                定制颜色
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text :gradient="{ deg: 180, from: 'rgb(85, 85, 85)', to: 'rgb(170, 170, 170)' }">
                定制颜色
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
                瞎写的颜色
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text :size="28" type="info">
                Live Forever
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text :size="32" type="danger">
                Live Forever
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text :size="24" type="warning">
                Married with Children
            </n-gradient-text>
        </p>
        <p>
            <n-gradient-text :size="36" type="success">
                Back in the USSR
            </n-gradient-text>
        </p>


        <hr>
        <mark>圖標 Icon</mark>
        <p>
            <n-icon size="40">
                <game-controller-outline />
            </n-icon>
            <n-icon size="40" color="#0e7a0d">
                <game-controller />
            </n-icon>
            <n-icon size="40" :component="GameController" />
        </p>
        <p>
            <n-icon :component="CashOutline" size="40" :depth="1" />
            <n-icon :component="CashOutline" size="40" :depth="2" />
            <n-icon :component="CashOutline" size="40" :depth="3" />
            <n-icon :component="CashOutline" size="40" :depth="4" />
            <n-icon :component="CashOutline" size="40" :depth="5" />
        </p>
        <p>
            <n-icon size="40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
                </svg>
            </n-icon>
            <n-icon size="40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                        fill="currentColor" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                        fill="currentColor" />
                </svg>
            </n-icon>
            <n-icon size="40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V9Z"
                        fill="currentColor" />
                    <path d="M14 12L8 15.4641V8.5359L14 12Z" fill="currentColor" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                        fill="currentColor" />
                </svg>
            </n-icon>
            <n-icon :size="40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
                        fill="currentColor" />
                </svg>
            </n-icon>

        </p>

        <n-icon-wrapper :size="24" :border-radius="4">
            <n-icon :size="18" :component="Checkmark16Filled" />
        </n-icon-wrapper>

        <n-icon-wrapper :size="30" :border-radius="4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
                    fill="currentColor" />
            </svg>
        </n-icon-wrapper>


        <hr>
        <mark>水印 Watermark</mark>

        <n-watermark v-if="true" content="核心机密" cross selectable :font-size="16" :line-height="16" :width="200" :height="128"
            :x-offset="12" :y-offset="28" :rotate="-15">
            <n-table :bordered="false" :single-line="false">
                <thead>
                    <tr>
                        <th>复盘</th>
                        <th>赋能</th>
                        <th>协同</th>
                        <th>...</th>
                        <th>串联</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>拉通</td>
                        <td>打通</td>
                        <td>树立</td>
                        <td>...</td>
                        <td>履约</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </n-table>
        </n-watermark>

        <n-watermark v-if="false" image="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" cross fullscreen
            :font-size="16" :line-height="16" :width="184" :height="184" :x-offset="12" :y-offset="0" :image-width="64"
            :image-opacity="0.25" />

        <n-watermark v-if="false" content="大家艰苦一下，一切都会有的" cross fullscreen :font-size="16" :line-height="16"
            :width="384" :height="384" :x-offset="12" :y-offset="60" :rotate="-15" />


        <hr>
        <mark>111</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>



        <hr>
        <mark>...</mark>




    </div>
</template>


<style scoped lang='scss'>

</style>