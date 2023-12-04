media=(
  icon.label.drawing=off 
  icon.color=0xff7cfc00
  icon.font="Hack Nerd Font:Regular:16.0" 
  icon.background.drawing=on
  icon.background.image=media.artwork
  icon.background.image.corner_radius=9
  script="$PLUGIN_DIR/media.sh"
  label.max_chars=25
  scroll_texts=on
  updates=on
)

status_bracket=(
  background.color=$BACKGROUND_1
  background.border_color=$BACKGROUND_2
)


sketchybar --add item media q \
           --set media "${media[@]}" \
           --subscribe media media_change
           
