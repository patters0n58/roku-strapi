"""Pixel Cat Desktop Pet
A draggable pixel art cat that sits on your desktop
"""
import tkinter as tk

# 16x16 pixel cat design (1 = black pixel, 0 = transparent)
CAT_PIXELS = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],  # ears
    [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],  # head
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0],  # eyes + face
    [0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],  # nose area
    [0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0],  # body
    [0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

PIXEL_SIZE = 20  # Each pixel = 20x20 screen pixels

def create_pixel_cat():
    root = tk.Tk()
    root.title("Pixel Cat")
    
    # Calculate window size
    width = len(CAT_PIXELS[0]) * PIXEL_SIZE
    height = len(CAT_PIXELS) * PIXEL_SIZE
    root.geometry(f"{width}x{height}")
    
    # Desktop pet settings
    root.overrideredirect(True)      # Remove title bar
    root.attributes("-topmost", True)  # Always on top
    root.attributes("-transparentcolor", "white")  # White = transparent
    
    canvas = tk.Canvas(root, width=width, height=height, bg="white", highlightthickness=0)
    canvas.pack()
    
    # Draw pixel art
    for row in range(len(CAT_PIXELS)):
        for col in range(len(CAT_PIXELS[0])):
            if CAT_PIXELS[row][col] == 1:
                x1 = col * PIXEL_SIZE
                y1 = row * PIXEL_SIZE
                canvas.create_rectangle(x1, y1, x1+PIXEL_SIZE, y1+PIXEL_SIZE, 
                                      fill="black", outline="black")
    
    # Drag functionality
    def start_drag(event):
        root._start_x = event.x
        root._start_y = event.y
    
    def drag(event):
        x = root.winfo_x() + event.x - root._start_x
        y = root.winfo_y() + event.y - root._start_y
        root.geometry(f"+{x}+{y}")
    
    canvas.bind("<Button-1>", start_drag)
    canvas.bind("<B1-Motion>", drag)
    
    # Double-click to close
    root.bind("<Double-1>", lambda e: root.destroy())
    
    # Start on desktop (bottom-right corner)
    root.geometry(f"+{root.winfo_screenwidth()-width-20}+{root.winfo_screenheight()-height-20}")
    
    root.mainloop()

if _name_ == "_main_":
    create_pixel_cat()