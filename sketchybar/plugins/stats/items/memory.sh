#!/usr/bin/env bash

source "$HOME/.config/sketchybar/colors.sh"

memory=(
	background.padding_left=0
	label.font="Hack Nerd Font:Regular:13.0"
	label.color="$TEXT"
	icon="$MEMORY"
	icon.font="Hack Nerd Font:Regular:16.0"
	icon.color="$GREEN"
	update_freq=15
	script="/Users/work/.config/sketchybar/plugins/stats/scripts/ram.sh"
)

sketchybar --add item memory right \
	--set memory "${memory[@]}"