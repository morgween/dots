#!/usr/bin/env bash

source "$HOME/.config/sketchybar/colors.sh"

cpu_percent=(
	background.padding_left=0
	background.padding_right=0
	label.font="Hack Nerd Font:Regular:13.0"
	label=CPU%
	label.color="$WHITE"
	icon="$CPU"
	icon.color="$BLUE"
	icon.font="Hack Nerd Font:Regular:16.0"
	update_freq=2
	mach_helper="$HELPER"
)

sketchybar --add item cpu.percent right \
	--set cpu.percent "${cpu_percent[@]}"