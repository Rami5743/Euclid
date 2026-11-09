# Generates a stylised but geographically placed world map.
# Equirectangular: x = (lon+180)/360*2000, y = (90-lat)/180*1000
W, H = 2000, 1000

def proj(lon, lat):
    return ((lon + 180) / 360 * W, (90 - lat) / 180 * H)

def path(points, close=True):
    pts = [proj(*p) for p in points]
    d = f"M{pts[0][0]:.1f} {pts[0][1]:.1f}"
    for x, y in pts[1:]:
        d += f" L{x:.1f} {y:.1f}"
    return d + (" Z" if close else "")

EURASIA = [(-9,43),(-8,44),(-1,46),(-4,48),(-1,49),(2,51),(4,52),(7,53),(8,55),(10,57),(13,54),(19,54),
 (21,56),(24,57),(28,59),(30,60),(26,65),(22,66),(25,70),(40,68),(55,70),(70,72),(80,73),(95,77),(110,76),
 (130,72),(140,73),(160,69),(170,68),(180,65),(175,62),(165,60),(158,57),(150,59),(143,53),(140,50),
 (135,43),(130,42),(126,38),(122,38),(120,34),(122,30),(117,24),(110,20),(108,15),(106,10),(103,1),
 (100,6),(98,12),(95,16),(94,21),(90,22),(85,20),(82,17),(80,13),(77,8),(73,16),(70,21),(68,24),(63,25),
 (57,25),(52,28),(48,30),(56,25),(59,22),(55,18),(50,13),(44,12),(43,17),(39,21),(35,28),(34,31),(36,36),
 (30,36),(27,37),(23,38),(20,40),(16,38),(18,40),(14,42),(12,44),(8,44),(3,42),(-2,41),(-6,37),(-9,38)]
AFRICA = [(-17,21),(-16,12),(-13,8),(-4,5),(3,6),(9,4),(9,-1),(13,-6),(12,-17),(15,-27),(18,-34),(25,-34),
 (33,-28),(35,-21),(40,-16),(41,-11),(40,-3),(43,1),(48,2),(51,11),(44,12),(38,15),(37,22),(34,28),(32,31),
 (25,32),(17,31),(10,34),(3,36),(-2,35),(-6,36),(-10,31),(-14,26)]
NAMERICA = [(-168,66),(-160,70),(-130,70),(-110,69),(-95,70),(-85,67),(-80,62),(-78,56),(-65,50),(-60,47),
 (-66,44),(-70,41),(-75,35),(-81,25),(-85,30),(-90,29),(-97,26),(-97,22),(-92,18),(-88,21),(-84,10),(-78,8),
 (-80,16),(-90,14),(-95,16),(-105,20),(-110,24),(-114,30),(-120,34),(-124,40),(-125,48),(-132,53),(-140,60),
 (-150,60),(-160,56),(-166,62)]
SAMERICA = [(-81,8),(-76,11),(-70,12),(-62,10),(-52,5),(-50,0),(-44,-2),(-35,-5),(-38,-13),(-48,-25),
 (-54,-34),(-58,-39),(-62,-41),(-65,-45),(-68,-52),(-74,-53),(-73,-45),(-72,-38),(-71,-30),(-70,-20),
 (-76,-14),(-81,-6),(-80,0),(-78,2)]
AUSTRALIA = [(113,-22),(114,-26),(115,-34),(119,-34),(125,-32),(129,-32),(135,-35),(138,-35),(140,-38),
 (146,-39),(150,-37),(153,-30),(153,-25),(146,-19),(142,-11),(136,-12),(130,-12),(125,-14),(122,-18)]
ANTARCTICA = [(-180,-72),(-150,-75),(-120,-73),(-90,-74),(-60,-70),(-45,-66),(-20,-70),(10,-69),(40,-68),
 (70,-67),(100,-66),(130,-66),(160,-70),(180,-72),(180,-90),(-180,-90)]
GREENLAND = [(-45,60),(-50,65),(-55,70),(-50,75),(-40,80),(-30,81),(-22,73),(-25,68),(-35,62)]
MADAGASCAR = [(43,-12),(50,-15),(48,-25),(44,-22)]
JAPAN = [(130,32),(135,34),(141,40),(145,44),(142,45),(138,37),(133,33)]
BRITAIN = [(-5,50),(-2,53),(-3,58),(-6,58),(-8,54),(-6,50)]
IRELAND = [(-10,52),(-6,53),(-6,55),(-9,55)]
NZ = [(173,-35),(178,-38),(174,-41),(170,-46),(167,-45),(172,-40)]
INDONESIA = [(95,5),(105,-6),(118,-8),(128,-9),(131,-8),(120,-2),(110,0),(100,4)]
PHILIPPINES = [(120,18),(124,13),(126,8),(122,6),(119,11)]
SRILANKA = [(80,9),(82,7),(81,6),(79,7)]
ICELAND = [(-24,65),(-18,66),(-14,65),(-19,63)]
CUBA = [(-85,22),(-78,23),(-74,20),(-80,20)]

LAND = [EURASIA, AFRICA, NAMERICA, SAMERICA, AUSTRALIA, ANTARCTICA]
ISLES = [GREENLAND, MADAGASCAR, JAPAN, BRITAIN, IRELAND, NZ, INDONESIA, PHILIPPINES, SRILANKA, ICELAND, CUBA]

parts = []
parts.append(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
  <defs>
    <linearGradient id="w-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cfe3df"/><stop offset="100%" stop-color="#a9c6c3"/>
    </linearGradient>
    <linearGradient id="w-land" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e9d6a9"/><stop offset="100%" stop-color="#d2b27c"/>
    </linearGradient>
    <pattern id="w-waves" width="120" height="60" patternUnits="userSpaceOnUse">
      <path d="M0 40 q30 -22 60 0 q30 22 60 0" fill="none" stroke="#8fb3ae" stroke-width="2.4" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#w-sea)"/>
  <rect width="{W}" height="{H}" fill="url(#w-waves)"/>
  <g fill="url(#w-land)" stroke="#9c6f3c" stroke-width="5" stroke-linejoin="round" vector-effect="non-scaling-stroke">''')
for poly in LAND:
    parts.append(f'    <path d="{path(poly)}"/>')
parts.append('  </g>\n  <g fill="url(#w-land)" stroke="#9c6f3c" stroke-width="4" stroke-linejoin="round" vector-effect="non-scaling-stroke">')
for poly in ISLES:
    parts.append(f'    <path d="{path(poly)}"/>')
parts.append('  </g>')

# terrain hints
mountains = [(90,35),(78,34),(70,36),(8,46),(-110,40),(-70,-15),(30,-5),(145,-25)]
parts.append('  <g fill="none" stroke="#a8803f" stroke-width="4" opacity="0.4" stroke-linecap="round" vector-effect="non-scaling-stroke">')
for lon, lat in mountains:
    x, y = proj(lon, lat)
    parts.append(f'    <path d="M{x-10:.0f} {y:.0f} l7 -7 l7 7 M{x+6:.0f} {y+4:.0f} l7 -7 l7 7"/>')
parts.append('  </g>')

forests = [(20,0),(-60,-5),(100,0),(25,55),(-95,50),(135,-15)]
parts.append('  <g fill="#7d9b74" opacity="0.5">')
for lon, lat in forests:
    x, y = proj(lon, lat)
    parts.append(f'    <circle cx="{x:.0f}" cy="{y:.0f}" r="6"/><circle cx="{x+9:.0f}" cy="{y+6:.0f}" r="5"/><circle cx="{x-8:.0f}" cy="{y+5:.0f}" r="5"/>')
parts.append('  </g>')
parts.append('</svg>')

open('/home/user/Euclid/src/render/maps/world.svg', 'w').write('\n'.join(parts) + '\n')
print('written')
