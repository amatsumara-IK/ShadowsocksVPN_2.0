function FindProxyForURL(url, host) {
    // 1. НАСТРОЙКА ПРОКСИ
    // Укажите здесь порт, который использует ваш Shadowsocks (обычно 1080)
    // SOCKS5 - современный стандарт, SOCKS - для совместимости, DIRECT - если прокси недоступен
    var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    // 2. СПИСОК САЙТОВ (VPN будет работать только для них)
    // Просто добавляйте новые домены в кавычках через запятую.
    // Точки перед доменом ставить не нужно.
    var vpnDomains = [
    // --- НЕЙРОСЕТИ И ИИ (ChatGPT, Gemini, Claude, Grok, Midjourney) ---
    "openai.com",
    "chatgpt.com",
    "oaistatic.com",
    "oaiusercontent.com",
    "auth0.com",
    "gemini.google.com",
    "bard.google.com",
    "aistudio.google.com",
    "deepmind.com",
    "anthropic.com",
    "claude.ai",
    "x.ai",
    "accounts.x.ai",
    "grok.com",
    "copilot.microsoft.com",
    "bing.com",
    "bingapis.com",
    "midjourney.com",
    "stability.ai",
    "huggingface.co",

    // --- РАБОТА, МЕНЕДЖМЕНТ И ДИЗАЙН (Jira, Miro, Notion, Canva, LinkedIn) ---
    "atlassian.com",
    "lookerstudio.google.com",
    "atlassian.net",
    "jira.com",
    "trello.com",
    "bitbucket.org",
    "miro.com",
    "miro-static.com",
    "notion.so",
    "notion.site",
    "notion-static.com",
    "canva.com",
    "canva.me",
    "figma.com",
    "slack.com",
    "slack-edge.com",
    "grammarly.com",
    "grammarly.io",
    "hubspot.com",
    "mailchimp.com",
    "surveymonkey.com",
    "upwork.com",
    "linkedin.com",
    "licdn.com",
    "slideshare.net",

    // --- РАЗРАБОТКА И IT (Docker, GitHub Copilot, Intel/Nvidia, JetBrains) ---
    "docker.com",
    "docker.io",
    "hashicorp.com",
    "terraform.io",
    "jetbrains.com",
    "github.com",
    "githubusercontent.com",
    "githubcopilot.com",
    "gitlab.com",
    "oracle.com",
    "java.com",
    "intel.com",
    "nvidia.com",
    "amd.com",
    "qualcomm.com",
    "sentry.io",
    "superuser.com",

    // --- СОЦИАЛЬНЫЕ СЕТИ, МЕССЕНДЖЕРЫ И ВИДЕО (YouTube, Insta, FB, X, Discord) ---
    "youtube.com",
    "youtu.be",
    "googlevideo.com",
    "ytimg.com",
    "ggpht.com",
    "instagram.com",
    "cdninstagram.com",
    "facebook.com",
    "fbcdn.net",
    "fbsbx.com",
    "whatsapp.com",
    "twitter.com",
    "x.com",
    "twimg.com",
    "t.co",
    "discord.com",
    "discordapp.com",
    "discordapp.net",

    // --- МЕДИА, СТРИМИНГ И НОВОСТИ (Netflix, Spotify, Reddit, Medium, BBC) ---
    "netflix.com",
    "nflxext.com",
    "nflxvideo.net",
    "spotify.com",
    "scdn.co",
    "soundcloud.com",
    "bbc.com",
    "bbc.co.uk",
    "cnn.com",
    "dw.com",
    "reuters.com",
    "bloomberg.com",
    "medium.com",
    "quora.com",
    "reddit.com",
    "redditmedia.com",
    "archive.org",

    // --- БЕЗОПАСНОСТЬ ---
    "torproject.org",
    "proton.me",
    "protonmail.com",

   // --- ОБЛАЧНЫЕ СЕРВИСЫ И ХОСТИНГ (AWS, DigitalOcean, Hetzner, GoDaddy) ---
    "aws.amazon.com",
    "digitalocean.com",
    "hetzner.com",
    "hetzner.de",
    "heroku.com",
    "vultr.com",
    "godaddy.com",
    "namecheap.com",
    "bluehost.com",
    "fastly.com",
    "teamviewer.com",

    // --- ДИЗАЙН, СТОКИ И КРЕАТИВ (Adobe, Behance, Stocks) ---
    "adobe.com",
    "behance.net",
    "dribbble.com",
    "shutterstock.com",
    "depositphotos.com",
    "istockphoto.com",
    "pixabay.com",
    "pexels.com",
    "artstation.com",
    "deviantart.com",

    // --- КНИГИ И ТОРРЕНТЫ (Rutracker, Flibusta, Sci-Hub) ---
    "rutracker.org",
    "rutracker.net",
    "nnmclub.to",
    "rutor.info",
    "flibusta.is",
    "flibusta.site",
    "libgen.is",
    "sci-hub.se",

    // --- НЕЗАВИСИМЫЕ СМИ (Meduza, Dozhd, The Insider) ---
    "meduza.io",
    "tvrain.tv",
    "theins.ru",
    "svoboda.org",
    "novayagazeta.eu",
    "currenttime.tv",
    "zona.media",
    "ovdinfo.org",
    "echo.msk.ru",
    "holod.media",

    // --- ФИНАНСЫ И КРИПТА (Coinbase, Wise, PayPal) ---
    "coinbase.com",
    "kraken.com",
    "blockchain.com",
    "uniswap.org",
    "wise.com",
    "payoneer.com",
    "paypal.com",
    "stripe.com",

    // --- ИГРЫ И РАЗВЛЕЧЕНИЯ (PlayStation, Twitch, TikTok) ---
    "playstation.com",
    "sonyentertainmentnetwork.com",
    "xbox.com",
    "epicgames.com",
    "unrealengine.com",
    "ubisoft.com",
    "ea.com",
    "twitch.tv",
    "ttvnw.net",
    "tiktok.com",
    "tiktokcdn.com",
    "onlyfans.com",

   // --- OBSIDIAN SHARE NOTE & SYNC ---
    "note.sx",            
    "share.note.sx",     
    "api.note.sx",        
    "static.note.sx",     
    "obsidian.md",        
    "obsidian-releases.com", 
    "raw.githubusercontent.com",


    "app.4dev.com",
    "viewstripo.email",
    "my.stripo.email"
   ];

    // 3. ЛОГИКА ПРОВЕРКИ (Не меняйте этот блок)
    // Проходим по списку и ищем совпадение конца домена
    for (var i = 0; i < vpnDomains.length; i++) {
        var domain = vpnDomains[i];
        
        // Проверяем: либо хост равен домену, либо хост заканчивается на .домен
        // dnsDomainIs - стандартная, быстрая функция PAC файлов
        if (dnsDomainIs(host, domain) || host === domain) {
            return proxy;
        }
    }

    // Если совпадений нет — идем напрямую (без VPN)
    return "DIRECT";
}
