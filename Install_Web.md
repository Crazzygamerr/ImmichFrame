## 🔙 Back
Go back to the [Full Readme](/README.md)

## 🌐 ImmichFrame Web
- [🔙 Back](#%F0%9F%94%99-back)
- [🌐 ImmichFrame Web](#%F0%9F%8C%90-immichframe-web)
- [✨ Demo](#%E2%9C%A8-demo)
- [🔧 Installation](#%F0%9F%94%A7-installation)
- [🐋 Docker Compose](#%F0%9F%90%8B-docker-compose)
  - [Docker Compose with environment variables](#docker-compose-with-environment-variables)
  - [Docker Compose with Settings.json](#docker-compose-with-settingsjson)
  - [Docker Compose with env file](#docker-compose-with-env-file)
- [⚙️ Configuration](#%E2%9A%99%EF%B8%8F-configuration)
- [🆘 Help](#%F0%9F%86%98-help)

## ✨ Demo
![ImmichFrame Web](/design/demo/web_demo.png)

## 🔧 Installation
ImmichFrame Web is installed via [Docker 🐋](#🐋-docker-compose)

## 🐋 Docker Compose
### Docker Compose with environment variables

> [!NOTE]  
> Not every setting is needed. Only configure what you need!

```yaml
name: immichframe
services:
  immichframe:
    container_name: immichframe
    image: ghcr.io/immichframe/immichframe:latest
    restart: on-failure
    ports:
      - "8080:8080"
    environment:
      TZ: "Europe/Berlin"
      # Required
      ImmichServerUrl: "URL"
      ApiKey: "KEY"
      # Image
      ImageZoom: "true"  
      Interval: "10"
      TransitionDuration: "2"
      # Filters
      Albums: "ALBUM1,ALBUM2"
      ExcludedAlbums: "ALBUM3,ALBUM4"
      People: "PERSON1,PERSON2"
      ShowMemories: "false"
      # Clock
      ShowClock: "true"
      ClockFormat: "HH:mm"
      # Weather
      WeatherApiKey: ""
      UnitSystem: "imperial"
      Language: "en"
      ShowWeatherDescription: "true"
      WeatherLatLong: "40.730610, -73.935242"
      # Metadata
      ShowImageDesc: "true"
      ShowImageLocation: "true"
      ShowPhotoDate: "true"
      PhotoDateFormat: "yyyy-MM-dd"
      # Caching
      RenewImagesDuration: "30"
      DownloadImages: "false"
      RefreshAlbumPeopleInterval: "12"
      # UI (Not working right now)
      FontColor: "#FF5733"
      # Misc
      ImmichFrameAlbumName: ""
```

### Docker Compose with Settings.json

An example of the Settings.json can be found [here](/ImmichFrame/Settings.example.json).

> [!IMPORTANT]  
> Change `PATH/TO/CONFIG` to the correct path!

```yaml
name: immichframe
services:
  immichframe:
    container_name: immichframe
    image: ghcr.io/immichframe/immichframe:latest
    restart: on-failure
    volumes:
      - PATH/TO/CONFIG:/app/Config
    ports:
      - "8080:8080"
    environment:
      TZ: "Europe/Berlin"
```

### Docker Compose with env file

An example of the .env can be found [here](/docker/example.env).

```yaml
name: immichframe
services:
  immichframe:
    container_name: immichframe
    image: ghcr.io/immichframe/immichframe:latest
    restart: on-failure
    ports:
      - "8080:8080"
    env_file:
      - .env
    environment:
      TZ: "Europe/Berlin"
```

## ⚙️ Configuration

For more information, read [here](/README.md#configuration).

## 🆘 Help

[Discord Channel][support-url]


<!-- MARKDOWN LINKS & IMAGES -->
[support-url]: https://discord.com/channels/979116623879368755/1217843270244372480