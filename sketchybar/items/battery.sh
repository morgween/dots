#!/usr/bin/env sh

PERCENTAGE=$(pmset -g batt | grep -Eo "\d+%" | cut -d% -f1)
CHARGING=$(pmset -g batt | grep 'AC Power')

if [ $PERCENTAGE = "" ]; then
  exit 0
fi

case ${PERCENTAGE} in
  9[0-9]|100) ICON=""
  ;;
  [6-8][0-9]) ICON=""
  ;;
  [3-5][0-9]) ICON=""
  ;;
  [1-2][0-9]) ICON=""
  ;;
  *) ICON=""
esac

if [[ $CHARGING != "" ]]; then
  ICON=""
fi

status_bracket=(
  background.color=$BACKGROUND_1
  background.border_color=$BACKGROUND_2
)

sketchybar --set power_logo icon="$ICON" --set battery label="${PERCENTAGE}%"

sketchybar --add item battery right \
      --set battery update_freq=20 \
      icon.drawing=off \
      icon.font="Hack Nerd Font:Regular:16.0" \
      script="~/.config/sketchybar/plugins/battery.sh" \
      background.color=0x003C3E4F \
      background.padding_left=0

sketchybar --add item power_logo right \
      --set power_logo icon= \
      icon.font="Hack Nerd Font:Regular:16.0" \
      icon.color=0xff121219 \
      label.drawing=off \
      background.color=0xffB3E1A7

