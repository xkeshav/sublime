MacOS Sierra 10.12.5 Macbook Pro ( Ratina )

Ubuntu to Mac os.
1. You can not create new file from context menu but can create new folder only.
alternative: use `touch filename`
2. No utility to lock the monitor
    alternative:
    	a. Navigate to  icon --> System Prefrences --> Security & Privacy --> General --> Check Require Password *immediately* after sleep or screen saver starts
    	b. hit `Shift-Control-Power` hold them down for two seconds, revoke by Spacebar
3. No way to see hidden files in a folder.
    alternative: open terminal and run `defaults write com.apple.Finder AppleShowAllFiles true` and than `killall Finder`
4. No way to see file system.
  alternative: go to Finder 
      hit `Command + Shift + H`  => open Home folder ( in Finder )
      hit `Shift + command + G` ==> write location name 
5. *Open in Terminal* directly within folder utility missing
    alternative:  icon --> System Preferences --> Keyboard --> Shortcuts --> Services --> Enable "New Terminal at Folder"
        to check this ; suppose we have to open /opt/alpha/beta folder in terminal then 
         Go back to the parent folder(alpha), select the relevant folder (beta), right click (context menu) --> Services --> Open Folder in Terminal
5. brew instead of apt-get
    Install brew using below command in terminal
    `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`// Refrence http://brew.sh
6. Unable to keep project open in Sublime-text-3 while we close all the files.
 alternative : use Shift +Q to close sublime completely. or install 
7. No shortcut to open terminal.
    alternative: command + spacebar and write Terminal ( minimize and right click on icon from dock  and check Options > Keep in Dock)
8. Title of Tab in terminal ( shortcut command + I and write tab Title ; but no way to close that panel using keyboard)
8. no window maximize, if you click on maximize, it will span over the screen and hide the menu ( double tab on window will adjust according to screen width)
9. window top bar can not adjusted within open window
10. git installed but no autocomplete feature.
 alternative: install `curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash`
 added  in ~/.bash_profile

```
     if [ -f ~/.git-completion.bash ]; then
      . ~/.git-completion.bash
     fi
```

11. mouse scroll reverse
Navigate to System Prefrences ( Apple icon) > Mouse > Uncheck Scoll Direction : Natural
12. set function keys ( F1 F2 ) as normal 
   icon > System Prefrences ( Apple icon) > Keyboards > (last option) check F1.F2, etc.. keys as standard keys 
11. remove Siri
Navigate to System Prefrences ( Apple icon) > Siri > Uncheck Enable Siri on right side panel
12. backspace ( fn + delete )
13. remove Notification of stocks
Navigate to System Prefrences ( Apple icon) > Extensions > Today > uncheck Stock

14. rename a file
select File and Press Enter (return)

15. make link for sublime so that it can be opened from terminal by hit `subl`
`sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl`

16. colorful terminal and git branch in terminal

```
# Git branch in prompt
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

RED="\[\033[0;31m\]"
YELLOW="\[\033[1;33m\]"
GREEN="\[\033[0;32m\]"
BLUE="\[\033[1;34m\]"
LIGHT_RED="\[\033[1;31m\]"
LIGHT_GREEN="\[\033[1;32m\]"
WHITE="\[\033[1;37m\]"
LIGHT_GRAY="\[\033[0;37m\]"
COLOR_NONE="\[\e[0m\]"

export PS1="${GREEN}\u@${LIGHT_GRAY}\h:${LIGHT_RED}\w${LIGHT_GREEN}\$(parse_git_branch)${BLUE} $ "

if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi

export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls='ls -GFh'
```

keybaord symbol list
 icon --> System Preferences --> Keyboard > Modifier Keys 
⌘ = Command
⇧ = Shift
⌥ = Option (a.k.a. Alt)
⌃ = Ctrl
⎋ = Esc
↩︎ = Return
⌫ = Delete (a.k.a. Backspace)


`Command + Option + J` => chrome developer tools



Hit `subl .` from the location of peoject folder to open project in sublime. 

Version 
10.10 Yosemite
10.11 EI Captian
10.12 Sierra
¢ option + 4



