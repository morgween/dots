#!/usr/bin/env bash

source "$HOME/.config/sketchybar/colors.sh"

disk=(
	background.padding_left=0
	label.font="Hack Nerd Font:Regular:13.0"
	label.color="$BLUE"
	icon=
	icon.color="$MAROON"
	icon.font="MesloLGS NF:Regular:16.0"
	update_freq=60
	script="/Users/work/.config/sketchybar/plugins/stats/scripts/disk.sh"
)

sketchybar --add item disk right \
	--set disk "${disk[@]}"