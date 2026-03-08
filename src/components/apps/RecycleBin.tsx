'use client'

interface RecycleItem {
  name: string
  status: string
  dateLost: string
  comment: string
}

const recycleItems: RecycleItem[] = [
  { name: 'Your Neopets', status: 'starved_to_death', dateLost: '2006-04-12', comment: 'They waited for you' },
  { name: 'MSN Conversations', status: 'server_shutdown', dateLost: '2014-10-31', comment: '*nudge* *nudge* *nudge*' },
  { name: 'Limewire Downloads', status: '2000_viruses.exe', dateLost: '2007-11-03', comment: 'Worth it for that one song' },
  { name: 'Your Geocities Page', status: '404_not_found', dateLost: '2009-10-26', comment: 'Under construction forever' },
  { name: 'Club Penguin Account', status: 'banned_for_nothing', dateLost: '2017-03-29', comment: 'You know what you did' },
  { name: 'Flip Phone Texts', status: 'sim_card_lost', dateLost: '2010-08-15', comment: '160 characters of pure emotion' },
  { name: 'Your RuneScape GF', status: 'she_was_a_dude', dateLost: '2005-07-22', comment: 'Trimming armor free' },
  { name: 'AIM Buddy Profile', status: 'too_deep_for_2004', dateLost: '2008-12-01', comment: '~*~LiVe LaUgH lOvE~*~' },
  { name: 'Saturday Morning Feeling', status: 'grew_up', dateLost: '2009-09-05', comment: 'Cereal hit different then' },
  { name: 'Habbo Hotel Room', status: 'scammed_by_bobba', dateLost: '2007-06-14', comment: "Pool's closed" },
  { name: 'Your Tamagotchi', status: 'neglected', dateLost: '2002-03-18', comment: 'Beep... beep... silence' },
  { name: 'Snow Day Excitement', status: 'adult_now', dateLost: '2015-12-20', comment: 'Now it just means traffic' },
  { name: 'Blockbuster Membership', status: 'obsolete', dateLost: '2010-11-06', comment: 'Be kind, rewind' },
  { name: 'Your Webkinz Collection', status: 'servers_dying', dateLost: '2008-09-30', comment: 'The Curio Shop remembers' },
  { name: 'Flash Games Bookmarks', status: 'killed_by_adobe', dateLost: '2020-12-31', comment: 'RIP Miniclip' },
  { name: 'Your First Email Password', status: 'forgotten', dateLost: '2003-01-01', comment: 'It was probably password123' },
  { name: "Best Friend's Landline", status: 'nobody_answers', dateLost: '2008-05-10', comment: 'Their mom always picked up' },
  { name: 'Childhood Bedroom', status: 'redecorated', dateLost: '2012-07-04', comment: 'Glow stars removed' },
  { name: 'That Song On Repeat', status: 'overplayed', dateLost: '2006-11-11', comment: "Can't listen anymore" },
  { name: 'Summer 2003', status: 'memory_corrupted', dateLost: '2003-08-31', comment: 'The last real one' },
]

export function RecycleBin() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Menu Bar */}
      <div className="flex items-center bg-[#ece9d8] border-b border-[#848484] px-1 py-0.5 text-xs">
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">File</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">Edit</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">View</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">Help</button>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-[1fr_140px_90px] bg-[#ece9d8] border-b border-[#848484] text-xs font-semibold">
        <div className="px-2 py-1 border-r border-[#848484]">Name</div>
        <div className="px-2 py-1 border-r border-[#848484]">Status</div>
        <div className="px-2 py-1">Date Lost</div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-auto">
        {recycleItems.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-[1fr_140px_90px] text-xs border-b border-[#e5e5e5] hover:bg-[#316ac5] hover:text-white group cursor-default"
          >
            <div className="px-2 py-1 flex items-center gap-2 truncate">
              <span className="text-[#808080] group-hover:text-white">x</span>
              <span className="truncate" title={item.comment}>{item.name}</span>
            </div>
            <div className="px-2 py-1 text-[#cc0000] group-hover:text-white truncate">
              {item.status}
            </div>
            <div className="px-2 py-1 text-[#808080] group-hover:text-white">
              {item.dateLost}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-[#ffffc8] border-t border-[#808080] p-2 text-xs">
        <p className="font-bold">These files cannot be recovered.</p>
        <p className="text-[#808080]">They exist only in your memory now.</p>
      </div>

      {/* Status Bar */}
      <div className="bg-[#ece9d8] border-t border-[#848484] px-2 py-1 text-xs text-[#808080]">
        {recycleItems.length} item(s) - 0 bytes recoverable
      </div>
    </div>
  )
}
