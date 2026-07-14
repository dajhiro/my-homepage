한국어 | [English](https://github.com/dajhiro/obsidian-simple-homepage/blob/master/README.md)

# Simple Homepage
웹 브라우저처럼 동작하는 간단한 홈페이지 플러그인.

## 동기 (Motivation)
저는 인덱스 노트를 홈페이지로 사용합니다. 이 홈페이지 기능은 단축키와 함께, 웹 브라우저와 동일한 작동 방식으로 동작하기를 원했습니다. 새 탭과 홈페이지는 별개의 기능입니다.

[obsidian-homepage](https://github.com/novov/obsidian-homepage) (제작자: novov)가 아마 대부분의 사람들에게 필요한 기능을 이미 제공하고 있을 겁니다. 다만 이 플러그인은 제가 그리고자 하는 더 큰 워크플로의 한 조각으로서 만든 것입니다.

## 설치 (Installation)

### Obsidian 내에서 설치

1. **설정 → 커뮤니티 플러그인**을 엽니다.
2. **찾아보기**를 선택하고 "Simple Homepage"를 검색합니다.
3. **설치**를 선택한 다음 **활성화**합니다.

### 수동 설치

1. [최신 릴리스](https://github.com/dajhiro/obsidian-simple-homepage/releases)에서 `main.js`와 `manifest.json`을 다운로드합니다.
2. 볼트의 `.obsidian/plugins/` 폴더 안에 `simple-homepage` 폴더를 만듭니다.
3. 다운로드한 파일들을 해당 폴더에 복사합니다.
4. Obsidian을 다시 불러온 뒤 **설정 → 커뮤니티 플러그인**에서 **Simple Homepage**를 활성화합니다.

## 사용법 (Usage)

1. **설정 → Simple Homepage**를 엽니다.
2. 홈페이지로 사용할 노트를 **Path**에 지정합니다.
3. 필요하다면 **Startup**을 활성화하여, Obsidian이 빈 탭으로 시작할 때 홈페이지가 자동으로 열리도록 설정합니다.
4. 언제든지 **Open homepage** 명령(커맨드 팔레트 또는 단축키)으로 홈페이지를 열 수 있습니다.

## 기능 (Features)

### 현재
- **Command**: 홈페이지를 여는 명령 제공
  - 이 명령을 실행하면, 이미 홈페이지가 열린 탭이 존재하더라도 이를 무시하고 새로 홈페이지를 엽니다.
- **Startup**: Obsidian을 시작했을 때 빈 탭밖에 없다면 홈페이지를 자동으로 엽니다.

### Deprecated
- ~~리본 아이콘~~
  - 저는 단축키를 사용하기 때문에 리본 아이콘은 불필요하다고 느꼈습니다.

## Todo: Done
- [x] 빈 탭으로 시작할 때 홈페이지 열기
- [x] 여는 성능 개선

## 감사의 말 (Acknowledgements)
[obsidian-homepage](https://github.com/novov/obsidian-homepage) (제작자: novov)에서 영감을 받았습니다. 저의 첫 Obsidian 플러그인인 만큼, novov님의 코드를 많이 참조하였습니다.
