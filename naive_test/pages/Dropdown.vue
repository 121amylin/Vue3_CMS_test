<script setup>
import { useMessage } from "naive-ui";
import { NIcon } from "naive-ui"
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon,
    CashOutline as CashIcon
} from "@vicons/ionicons5";
const message = useMessage();
const showDropdownRef = ref(false);
const showDropdown = ref(false)
const xRef = ref(0);
const yRef = ref(0);

const options = [
    {
        label: "滨海湾金沙，新加坡",
        key: "marina bay sands",
        disabled: true
    },
    {
        label: "布朗酒店，伦敦",
        key: "brown's hotel, london"
    },
    {
        label: "亚特兰蒂斯巴哈马，拿骚",
        key: "atlantis nahamas, nassau"
    },
    {
        label: "比佛利山庄酒店，洛杉矶",
        key: "the beverly hills hotel, los angeles"
    }
]

const options2 = [
    {
        label: "滨海湾金沙，新加坡",
        key: "marina bay sands",
        props: {
            onClick: () => {
                message.success("Good!");
            }
        }
    },
    {
        label: "布朗酒店，伦敦",
        key: "brown's hotel, london",
        children: [
            {
                label: "鸡肉",
                key: "chicken",
                disabled: true,
                props: {
                    onClick: () => {
                        message.info("Okay");
                    }
                }
            },
            {
                label: "牛肉",
                key: "beef"
            }
        ]
    },
    {
        label: "亚特兰蒂斯巴哈马，拿骚",
        key: "atlantis nahamas, nassau",
        props: {
            onMousedown: () => {
                message.warning("Key down");
            }
        }
    }
]
const options4 = [
    {
        label: "杰·盖茨比",
        key: "jay gatsby"
    },
    {
        label: "黛西·布坎南",
        icon() {
            return h(NIcon, null, {
                default: () => h(CashIcon)
            });
        },
        key: "daisy buchanan"
    },
    {
        type: "divider",
        key: "d1"
    },
    {
        label: "尼克·卡拉威",
        key: "nick carraway"
    },
    {
        label: "其他",
        key: "others1",
        children: [
            {
                label: "乔丹·贝克",
                key: "jordan baker"
            },
            {
                label: "汤姆·布坎南",
                key: "tom buchanan"
            },
            {
                label: "其他",
                key: "others2",
                disabled: true,
                children: [
                    {
                        label: "鸡肉",
                        key: "chicken"
                    },
                    {
                        label: "牛肉",
                        key: "beef"
                    }
                ]
            }
        ]
    }
];

const handleSelect = (key) => {
    message.info(String(key));
}
const handleClick = () => {
    showDropdown.value = !showDropdown.value;
}

const handleSelect2 = (key) => {
    showDropdownRef.value = false;
    message.info(String(key));
}
const handleContextMenu = (e) => {
    e.preventDefault();
    showDropdownRef.value = false;
    nextTick().then(() => {
        showDropdownRef.value = true;
        xRef.value = e.clientX;
        yRef.value = e.clientY;
    });
}
const onClickoutside = () => {
    message.info("clickoutside");
    showDropdownRef.value = false;
}


const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        });
    };

const options3 = [
    {
        label: "用户资料",
        key: "profile",
        icon: renderIcon(UserIcon)
    },
    {
        label: "编辑用户资料",
        key: "editProfile",
        icon: renderIcon(EditIcon)
    },
    {
        label: "退出登录",
        key: "logout",
        icon: renderIcon(LogoutIcon)
    }
]

}
const handleSelect4 = (key) => {
    message.info(String(key));
}
</script>


<template>
    <div>
        <ClientOnly>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect" :show-arrow="true" size="huge">
                <n-button>找个地方休息</n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect" size="small">
                <n-button>懸浮</n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <n-dropdown trigger="click" :options="options" @select="handleSelect" size="medium">
                <n-button>點擊</n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <n-dropdown :show="showDropdown" :options="options" @select="handleSelect" size="large">
                <n-button @click="handleClick">
                    自定義觸發條件
                </n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <div style="width: 100%; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
                @contextmenu="handleContextMenu">
                右击
            </div>
            <n-dropdown placement="bottom-start" trigger="manual" :x="xRef" :y="yRef" :options="options"
                :show="showDropdownRef" :on-clickoutside="onClickoutside" @select="handleSelect2" />
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <n-dropdown trigger="hover" :options="options2" @select="handleSelect">
                <n-button>客製觸發事件</n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />

        <ClientOnly>
            <n-dropdown :options="options3">
                <n-button>用户资料</n-button>
            </n-dropdown>
        </ClientOnly>

        <n-divider />


        <ClientOnlye>
            <n-dropdown :options="options4" placement="bottom-start" trigger="click" @select="handleSelect4">
                <n-button>人物和食物</n-button>
            </n-dropdown>
        </ClientOnlye>



    </div>
</template>


<style scoped lang='scss'>

</style>