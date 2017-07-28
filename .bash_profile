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
