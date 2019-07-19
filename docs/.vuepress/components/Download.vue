<template>
<div class="download-page-component">
    <div class="container">
        <div class="platform">
            <img src="/images/windows-logo.png" style="width:100px">
            <button class="download-button" @click="openExternal(windows_main)" :class="windows_main? 'download-enabled' : null">
                <img class="download-svg" src="/images/download.svg">
                <span class="platform-name">Windows</span>
                <span class="platform-distro" style="display:inline;">(.exe)</span>
                <span class="platform-distro">Windows 7, 8, 10</span>
                <span class="coming-soon" v-if="!windows_main">Coming Soon</span>
            </button>
            <div class="other-downloads-heading" v-if="all_windows_downloads.length">Other downloads</div>
            <div v-for="bin in all_windows_downloads" class="other-downloads">
                <span>{{getExtensionFromBinary(bin)}}</span>
                <a :href="getLinkFromBinary(bin)" target="_blank">Download</a>
            </div>
        </div>

        <div class="platform">
            <img src="/images/linux-logo.png" style="width:83px;height:100px;">
            <button class="download-button" @click="openExternal(linux_main)" :class="linux_main? 'download-enabled' : null">
                <img class="download-svg" src="/images/download.svg">
                <span class="platform-name">Linux</span>
                <span class="platform-distro" style="display:inline;">(.AppImage)</span>
                <span class="platform-distro">Debian, Ubuntu, Red Hat, Fedora</span>
                <span class="coming-soon" v-if="!linux_main">Coming Soon</span>
            </button>
            <div class="other-downloads-heading" v-if="all_linux_downloads.length">Other downloads</div>
            <div v-for="bin in all_linux_downloads" class="other-downloads">
                <span>{{getExtensionFromBinary(bin)}}</span>
                <a :href="getLinkFromBinary(bin)" target="_blank">Download</a>
            </div>
        </div>

        <div class="platform">
            <img src="/images/apple-logo.svg">
            <button class="download-button" @click="openExternal(darwin_main)" :class="darwin_main? 'download-enabled' : null">
                <img class="download-svg" src="/images/download.svg">
                <span class="platform-name">Mac</span>
                <!-- <span class="platform-distro" style="display:inline;">(.app)</span> -->
                <span class="platform-distro" style="display:inline;">(.dmg)</span>
                <span class="platform-distro">macOS 10.9+</span>
                <span class="coming-soon" v-if="!darwin_main">Coming Soon</span>
            </button>
            <div class="other-downloads-heading" v-if="all_darwin_downloads.length">Other downloads</div>
            <div v-for="bin in all_darwin_downloads" class="other-downloads">
                <span>{{getExtensionFromBinary(bin)}}</span>
                <a :href="getLinkFromBinary(bin)" target="_blank">Download</a>
            </div>
            <span style="font-size:12px" v-if="!darwin_main">
                <a href="mailto:hello@nishkal.in?subject=Quark%20Build%20for%20Mac">Let us know</a> if you want to get it sooner!
            </span>
        </div>
    </div>
    <div class="post-content" v-if="channel == 'stable' && !disable_post_content">
        <h3>Want new features sooner?</h3>
        <span>Get the <router-link to="/download/insiders">Insiders build</router-link> instead.</span>
    </div>
    <div class="post-content" v-if="channel == 'insiders' && !disable_post_content">
        <h3>You're almost there.</h3>
        <span> To keep receiving latest updates, you need to change <router-link to="/snippets/auto-update.html#selecting-the-release-channel">these settings</router-link> after installing the software.</span>
    </div>
</div>
</template>

<script>
import stableJson from './../../version-assets/stable/__downloads.json';
import insidersJson from './../../version-assets/insiders/__downloads.json';
export default {
    props: [
        // "version",
        // "linux_main",
        // "linux_other",
        // "windows_main",
        // "windows_other",
        // "mac",
        "channel",
        "disable_post_content"
    ],
    data: function () {

        const releaseJson = this.channel == 'stable' ? stableJson : insidersJson;
        delete releaseJson.channel;

        releaseJson.darwin_main = releaseJson.darwin_main || '';

        const all_windows_downloads = JSON.parse(releaseJson.windows_other);
        all_windows_downloads.push(releaseJson.windows_main);

        const all_linux_downloads = JSON.parse(releaseJson.linux_other);
        all_linux_downloads.push(releaseJson.linux_main);

        const all_darwin_downloads = JSON.parse(releaseJson.darwin_other || JSON.stringify([]));
        if (releaseJson.darwin_main) {
            all_darwin_downloads.push(releaseJson.darwin_main);
        }

        return {
            all_windows_downloads,
            all_linux_downloads,
            all_darwin_downloads,
            ...releaseJson
        };

        const obj = {
            image: "",
            mainDownload: "",
            platformName: "",
            platformExt: "",
            platformSupported: ""
        };
    },
    methods: {
        getLinkFromBinary: function (bin) {
            if (!bin) {
                return;
            }
            const triggerUrl = `https://us-central1-diy-mechatronics.cloudfunctions.net/downloadCount/download-count`;
            // const triggerUrl = `https://quarkjs.io/download-count`;
            const finalUrl = `${triggerUrl}/?version=${
        this.version
      }&&binary=${bin}&&channel=${this.channel}`;
            return finalUrl;
        },
        openExternal: function (bin) {
            if (!bin) {
                return;
            }
            const link = this.getLinkFromBinary(bin);
            if (typeof ga != "undefined") {
                ga("send", "event", "Downloads", "download", link);
            }
            window.open(link);
        },
        getExtensionFromBinary: function (bin) {
            if (bin.endsWith(".exe")) {
                return ".exe";
            }
            if (bin.endsWith(".msi")) {
                return ".msi";
            }
            if (bin.endsWith(".zip")) {
                return ".zip";
            }
            if (bin.endsWith(".deb")) {
                return ".deb";
            }
            if (bin.endsWith(".AppImage")) {
                return ".appImage";
            }
            if (bin.endsWith(".tar.gz")) {
                return ".tar.gz";
            }

            if (bin.endsWith(".dmg")) {
                return ".dmg";
            }
            return bin;
        }
    }
};
</script>

<style lang="scss">
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: var(--heading-font-family);
}

.platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    margin: 60px 12px;

    img {
        max-height: 100px !important;
    }

    .download-button {
        font-family: var(--heading-font-family);
        margin-top: 20px;
        position: relative;
        background-color: var(--text-color--darker);
        color: var(--background-color);
        cursor: not-allowed !important;
        border: 0px;
        padding: 10px 0px;
        width: 220px;
        cursor: pointer;
        border-radius: 2px;

        .download-svg {
            width: 18px;
        }

        .platform-name {
            padding-left: 20px;
            font-size: 18px;
            font-weight: 500;
        }

        .platform-distro {
            display: block;
            margin-top: 10px;
            color: #cccccc;
            font-size: 12px;
            font-weight: 700;
        }
    }

    .download-enabled {
        cursor: pointer !important;
        background-color: var(--accent-color);
        color: var(--background-color) !important;
    }

    .download-enabled:hover {
        // background-color: var(--ion-color-primary-tint);
        box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0.15);
    }

    .other-downloads-heading {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
    }

    .other-downloads {
        margin-top: 10px;
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: space-between;

        span,
        a {
            display: inline-block;
            width: 50%;
            font-size: 14px;
            font-weight: 500;
        }

        a {
            cursor: pointer;
        }
    }

    .coming-soon {
        position: absolute;
        background-color: var(--accent-color);
        padding: 5px 5px;
        border-radius: 3px;
        right: -30px;
        top: -15px;
        display: block;
    }
}

.post-content {
    margin-top: -40px;
    padding-bottom: 40px;
    text-align: center;
    background-color: var(--code-background);
}

@media only screen and (max-width:600px) {
    div.container {
        margin-bottom: 20px;
    }

    div.platform {
        margin-bottom: 0px !important;
    }
}
</style>
