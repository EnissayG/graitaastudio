Add-Type -AssemblyName System.Drawing
$public = (Resolve-Path (Join-Path (Join-Path $PSScriptRoot "..") "public")).Path

function New-GsIcon([int]$sz, [string]$outPath) {
  $bmp = New-Object System.Drawing.Bitmap $sz, $sz
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'ClearTypeGridFit'
  $g.Clear([System.Drawing.Color]::FromArgb(255, 37, 99, 235))
  $fontSize = [math]::Max(10, [int]($sz / 3.2))
  $font = [System.Drawing.Font]::new("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = [System.Drawing.Brushes]::White
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF 0, 0, $sz, $sz
  $g.DrawString("GS", $font, $brush, $rect, $format)
  $font.Dispose()
  $g.Dispose()
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

New-GsIcon 32 (Join-Path $public "favicon-32x32.png")
New-GsIcon 180 (Join-Path $public "apple-touch-icon.png")
New-GsIcon 192 (Join-Path $public "icon-192.png")
New-GsIcon 512 (Join-Path $public "icon-512.png")
Write-Host "Icons written to $public"
