import type React from "react";
import dynamic from "next/dynamic";

const IconGrid = dynamic(() => import("@acme/ui").then((m) => m.IconGrid), {
  ssr: false,
});
const ZoomOutSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ZoomOutSolid),
  { ssr: false },
);
const ZoomInSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ZoomInSolid),
  { ssr: false },
);
const ZapSolid = dynamic(() => import("@acme/ui").then((m) => m.ZapSolid), {
  ssr: false,
});
const XmarkSmallSolid = dynamic(
  () => import("@acme/ui").then((m) => m.XmarkSmallSolid),
  { ssr: false },
);
const XmarkCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.XmarkCircleSolid),
  { ssr: false },
);
const XmarkSolid = dynamic(() => import("@acme/ui").then((m) => m.XmarkSolid), {
  ssr: false,
});
const WiFiSolid = dynamic(() => import("@acme/ui").then((m) => m.WiFiSolid), {
  ssr: false,
});
const WaveformEcgSolid = dynamic(
  () => import("@acme/ui").then((m) => m.WaveformEcgSolid),
  { ssr: false },
);
const VideoSolid = dynamic(() => import("@acme/ui").then((m) => m.VideoSolid), {
  ssr: false,
});
const UsersSolid = dynamic(() => import("@acme/ui").then((m) => m.UsersSolid), {
  ssr: false,
});
const UserSolid = dynamic(() => import("@acme/ui").then((m) => m.UserSolid), {
  ssr: false,
});
const UmbrelaSolid = dynamic(
  () => import("@acme/ui").then((m) => m.UmbrelaSolid),
  { ssr: false },
);
const TraySolid = dynamic(() => import("@acme/ui").then((m) => m.TraySolid), {
  ssr: false,
});
const TrashSolid = dynamic(() => import("@acme/ui").then((m) => m.TrashSolid), {
  ssr: false,
});
const ThumbsUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ThumbsUpSolid),
  { ssr: false },
);
const ThumbsDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ThumbsDownSolid),
  { ssr: false },
);
const TextUnderlineSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextUnderlineSolid),
  { ssr: false },
);
const TextItalicSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextItalicSolid),
  { ssr: false },
);
const TextHeadingSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextHeadingSolid),
  { ssr: false },
);
const TextBoldSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextBoldSolid),
  { ssr: false },
);
const TextAlignRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignRightSolid),
  { ssr: false },
);
const TextAlignLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignLeftSolid),
  { ssr: false },
);
const TextAlignJustifySolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignJustifySolid),
  { ssr: false },
);
const TextAlignCenterSolid = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignCenterSolid),
  { ssr: false },
);
const TextSolid = dynamic(() => import("@acme/ui").then((m) => m.TextSolid), {
  ssr: false,
});
const TagSolid = dynamic(() => import("@acme/ui").then((m) => m.TagSolid), {
  ssr: false,
});
const SunSolid = dynamic(() => import("@acme/ui").then((m) => m.SunSolid), {
  ssr: false,
});
const StarSolid = dynamic(() => import("@acme/ui").then((m) => m.StarSolid), {
  ssr: false,
});
const SquareOnSquareSolid = dynamic(
  () => import("@acme/ui").then((m) => m.SquareOnSquareSolid),
  { ssr: false },
);
const Square4GridSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Square4GridSolid),
  { ssr: false },
);
const SpeakerXmarkSolid = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerXmarkSolid),
  { ssr: false },
);
const SpeakerWave2Solid = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerWave2Solid),
  { ssr: false },
);
const SpeakerWave1Solid = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerWave1Solid),
  { ssr: false },
);
const SpeakerSolid = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerSolid),
  { ssr: false },
);
const Slider3VerticalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Slider3VerticalSolid),
  { ssr: false },
);
const Slider3HorizontalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Slider3HorizontalSolid),
  { ssr: false },
);
const ShippingboxSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShippingboxSolid),
  { ssr: false },
);
const ShieldSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShieldSlashSolid),
  { ssr: false },
);
const ShieldSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShieldSolid),
  { ssr: false },
);
const ShareSolid = dynamic(() => import("@acme/ui").then((m) => m.ShareSolid), {
  ssr: false,
});
const ShapeTriangleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeTriangleSolid),
  { ssr: false },
);
const ShapeSquareSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeSquareSolid),
  { ssr: false },
);
const ShapeRhombusSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeRhombusSolid),
  { ssr: false },
);
const ShapeCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeCircleSolid),
  { ssr: false },
);
const ServerSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ServerSolid),
  { ssr: false },
);
const SearchSolid = dynamic(
  () => import("@acme/ui").then((m) => m.SearchSolid),
  { ssr: false },
);
const ScissorsSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ScissorsSolid),
  { ssr: false },
);
const QuestionCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.QuestionCircleSolid),
  { ssr: false },
);
const PrinterSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PrinterSolid),
  { ssr: false },
);
const PowerSolid = dynamic(() => import("@acme/ui").then((m) => m.PowerSolid), {
  ssr: false,
});
const PlusSquareSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PlusSquareSolid),
  { ssr: false },
);
const PlusCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PlusCircleSolid),
  { ssr: false },
);
const PlusSolid = dynamic(() => import("@acme/ui").then((m) => m.PlusSolid), {
  ssr: false,
});
const PhoneSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneSlashSolid),
  { ssr: false },
);
const PhoneOutgoingSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneOutgoingSolid),
  { ssr: false },
);
const PhoneMissedSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneMissedSolid),
  { ssr: false },
);
const PhoneIncomingSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneIncomingSolid),
  { ssr: false },
);
const PhoneSolid = dynamic(() => import("@acme/ui").then((m) => m.PhoneSolid), {
  ssr: false,
});
const PercentSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PercentSolid),
  { ssr: false },
);
const PencilSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PencilSolid),
  { ssr: false },
);
const PenToolSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PenToolSolid),
  { ssr: false },
);
const PaperPlaneSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PaperPlaneSolid),
  { ssr: false },
);
const PaperClipSolid = dynamic(
  () => import("@acme/ui").then((m) => m.PaperClipSolid),
  { ssr: false },
);
const NosignSolid = dynamic(
  () => import("@acme/ui").then((m) => m.NosignSolid),
  { ssr: false },
);
const MusicNoteSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MusicNoteSolid),
  { ssr: false },
);
const MoonSolid = dynamic(() => import("@acme/ui").then((m) => m.MoonSolid), {
  ssr: false,
});
const MinusSquareSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MinusSquareSolid),
  { ssr: false },
);
const MinusCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MinusCircleSolid),
  { ssr: false },
);
const MinusSolid = dynamic(() => import("@acme/ui").then((m) => m.MinusSolid), {
  ssr: false,
});
const MicSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MicSlashSolid),
  { ssr: false },
);
const MicSolid = dynamic(() => import("@acme/ui").then((m) => m.MicSolid), {
  ssr: false,
});
const MessageBubble2Solid = dynamic(
  () => import("@acme/ui").then((m) => m.MessageBubble2Solid),
  { ssr: false },
);
const MessageBubbleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MessageBubbleSolid),
  { ssr: false },
);
const MediaStopCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaStopCircleSolid),
  { ssr: false },
);
const MediaStopSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaStopSolid),
  { ssr: false },
);
const MediaPlayCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPlayCircleSolid),
  { ssr: false },
);
const MediaPlaySolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPlaySolid),
  { ssr: false },
);
const MediaPauseCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPauseCircleSolid),
  { ssr: false },
);
const MediaPauseSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPauseSolid),
  { ssr: false },
);
const MediaForwardEndSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaForwardEndSolid),
  { ssr: false },
);
const MediaForwardSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaForwardSolid),
  { ssr: false },
);
const MediaBackwardEndSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaBackwardEndSolid),
  { ssr: false },
);
const MediaBackwardSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MediaBackwardSolid),
  { ssr: false },
);
const MedalSolid = dynamic(() => import("@acme/ui").then((m) => m.MedalSolid), {
  ssr: false,
});
const MapPinSolid = dynamic(
  () => import("@acme/ui").then((m) => m.MapPinSolid),
  { ssr: false },
);
const LockOpenSolid = dynamic(
  () => import("@acme/ui").then((m) => m.LockOpenSolid),
  { ssr: false },
);
const LockSolid = dynamic(() => import("@acme/ui").then((m) => m.LockSolid), {
  ssr: false,
});
const LocationSolid = dynamic(
  () => import("@acme/ui").then((m) => m.LocationSolid),
  { ssr: false },
);
const ListBulletSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ListBulletSolid),
  { ssr: false },
);
const LinkAltSolid = dynamic(
  () => import("@acme/ui").then((m) => m.LinkAltSolid),
  { ssr: false },
);
const LinkSolid = dynamic(() => import("@acme/ui").then((m) => m.LinkSolid), {
  ssr: false,
});
const Line3Solid = dynamic(() => import("@acme/ui").then((m) => m.Line3Solid), {
  ssr: false,
});
const LayoutSolid = dynamic(
  () => import("@acme/ui").then((m) => m.LayoutSolid),
  { ssr: false },
);
const Layers3Solid = dynamic(
  () => import("@acme/ui").then((m) => m.Layers3Solid),
  { ssr: false },
);
const KeySolid = dynamic(() => import("@acme/ui").then((m) => m.KeySolid), {
  ssr: false,
});
const InfoCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.InfoCircleSolid),
  { ssr: false },
);
const ImageSolid = dynamic(() => import("@acme/ui").then((m) => m.ImageSolid), {
  ssr: false,
});
const HouseSolid = dynamic(() => import("@acme/ui").then((m) => m.HouseSolid), {
  ssr: false,
});
const HeartSolid = dynamic(() => import("@acme/ui").then((m) => m.HeartSolid), {
  ssr: false,
});
const HeadphonesSolid = dynamic(
  () => import("@acme/ui").then((m) => m.HeadphonesSolid),
  { ssr: false },
);
const HashtagSolid = dynamic(
  () => import("@acme/ui").then((m) => m.HashtagSolid),
  { ssr: false },
);
const GiftboxSolid = dynamic(
  () => import("@acme/ui").then((m) => m.GiftboxSolid),
  { ssr: false },
);
const GearSolid = dynamic(() => import("@acme/ui").then((m) => m.GearSolid), {
  ssr: false,
});
const FullscreenExitAltSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenExitAltSolid),
  { ssr: false },
);
const FullscreenExitSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenExitSolid),
  { ssr: false },
);
const FullscreenAltSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenAltSolid),
  { ssr: false },
);
const FullscreenSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenSolid),
  { ssr: false },
);
const FolderSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FolderSolid),
  { ssr: false },
);
const FloppyDiskSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FloppyDiskSolid),
  { ssr: false },
);
const FlameSolid = dynamic(() => import("@acme/ui").then((m) => m.FlameSolid), {
  ssr: false,
});
const FilterSolid = dynamic(
  () => import("@acme/ui").then((m) => m.FilterSolid),
  { ssr: false },
);
const EyeSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.EyeSlashSolid),
  { ssr: false },
);
const EyeSolid = dynamic(() => import("@acme/ui").then((m) => m.EyeSolid), {
  ssr: false,
});
const ExternalLinkSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ExternalLinkSolid),
  { ssr: false },
);
const EnvelopeSolid = dynamic(
  () => import("@acme/ui").then((m) => m.EnvelopeSolid),
  { ssr: false },
);
const EmojiSmileSolid = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiSmileSolid),
  { ssr: false },
);
const EmojiMehSolid = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiMehSolid),
  { ssr: false },
);
const EmojiFrownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiFrownSolid),
  { ssr: false },
);
const Dots9Solid = dynamic(() => import("@acme/ui").then((m) => m.Dots9Solid), {
  ssr: false,
});
const Dots6VerticalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Dots6VerticalSolid),
  { ssr: false },
);
const Dots6HorizontalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Dots6HorizontalSolid),
  { ssr: false },
);
const Dots3VerticalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Dots3VerticalSolid),
  { ssr: false },
);
const Dots3HorizontalSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Dots3HorizontalSolid),
  { ssr: false },
);
const DotSmallSolid = dynamic(
  () => import("@acme/ui").then((m) => m.DotSmallSolid),
  { ssr: false },
);
const DocSolid = dynamic(() => import("@acme/ui").then((m) => m.DocSolid), {
  ssr: false,
});
const DeviceTabletSolid = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceTabletSolid),
  { ssr: false },
);
const DeviceMobileSolid = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceMobileSolid),
  { ssr: false },
);
const DeviceDesktopSolid = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceDesktopSolid),
  { ssr: false },
);
const DeleteLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.DeleteLeftSolid),
  { ssr: false },
);
const CrownSolid = dynamic(() => import("@acme/ui").then((m) => m.CrownSolid), {
  ssr: false,
});
const CropSolid = dynamic(() => import("@acme/ui").then((m) => m.CropSolid), {
  ssr: false,
});
const CreditCardSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CreditCardSolid),
  { ssr: false },
);
const CompassSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CompassSolid),
  { ssr: false },
);
const CommandSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CommandSolid),
  { ssr: false },
);
const ColumnsSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ColumnsSolid),
  { ssr: false },
);
const CloudSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CloudSlashSolid),
  { ssr: false },
);
const CloudDownloadSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CloudDownloadSolid),
  { ssr: false },
);
const CloudArrowUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CloudArrowUpSolid),
  { ssr: false },
);
const CloudSolid = dynamic(() => import("@acme/ui").then((m) => m.CloudSolid), {
  ssr: false,
});
const ClockSolid = dynamic(() => import("@acme/ui").then((m) => m.ClockSolid), {
  ssr: false,
});
const ChevronUpChevronDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronUpChevronDownSolid),
  { ssr: false },
);
const ChevronUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronUpSolid),
  { ssr: false },
);
const ChevronSmallUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallUpSolid),
  { ssr: false },
);
const ChevronSmallRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallRightSolid),
  { ssr: false },
);
const ChevronSmallLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallLeftSolid),
  { ssr: false },
);
const ChevronSmallDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallDownSolid),
  { ssr: false },
);
const ChevronRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronRightSolid),
  { ssr: false },
);
const ChevronLeftChevronRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronLeftChevronRightSolid),
  { ssr: false },
);
const ChevronLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronLeftSolid),
  { ssr: false },
);
const ChevronDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronDownSolid),
  { ssr: false },
);
const CheckmarkSquareSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkSquareSolid),
  { ssr: false },
);
const CheckmarkDoubleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkDoubleSolid),
  { ssr: false },
);
const CheckmarkCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkCircleSolid),
  { ssr: false },
);
const CheckmarkSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkSolid),
  { ssr: false },
);
const Chartbar2Solid = dynamic(
  () => import("@acme/ui").then((m) => m.Chartbar2Solid),
  { ssr: false },
);
const ChartbarSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChartbarSolid),
  { ssr: false },
);
const ChartPieSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ChartPieSolid),
  { ssr: false },
);
const CartSolid = dynamic(() => import("@acme/ui").then((m) => m.CartSolid), {
  ssr: false,
});
const CaretUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CaretUpSolid),
  { ssr: false },
);
const CaretRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CaretRightSolid),
  { ssr: false },
);
const CaretLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CaretLeftSolid),
  { ssr: false },
);
const CaretDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CaretDownSolid),
  { ssr: false },
);
const CameraSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CameraSolid),
  { ssr: false },
);
const CalendarSolid = dynamic(
  () => import("@acme/ui").then((m) => m.CalendarSolid),
  { ssr: false },
);
const BoxSolid = dynamic(() => import("@acme/ui").then((m) => m.BoxSolid), {
  ssr: false,
});
const BookmarkSolid = dynamic(
  () => import("@acme/ui").then((m) => m.BookmarkSolid),
  { ssr: false },
);
const BookOpenSolid = dynamic(
  () => import("@acme/ui").then((m) => m.BookOpenSolid),
  { ssr: false },
);
const BellSlashSolid = dynamic(
  () => import("@acme/ui").then((m) => m.BellSlashSolid),
  { ssr: false },
);
const BellSolid = dynamic(() => import("@acme/ui").then((m) => m.BellSolid), {
  ssr: false,
});
const BagSolid = dynamic(() => import("@acme/ui").then((m) => m.BagSolid), {
  ssr: false,
});
const AtSignSolid = dynamic(
  () => import("@acme/ui").then((m) => m.AtSignSolid),
  { ssr: false },
);
const ArrowUpArrowDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowUpArrowDownSolid),
  { ssr: false },
);
const ArrowUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowUpSolid),
  { ssr: false },
);
const ArrowTurnUpRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnUpRightSolid),
  { ssr: false },
);
const ArrowTurnUpLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnUpLeftSolid),
  { ssr: false },
);
const ArrowTurnRightUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnRightUpSolid),
  { ssr: false },
);
const ArrowTurnRightDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnRightDownSolid),
  { ssr: false },
);
const ArrowTurnLeftUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnLeftUpSolid),
  { ssr: false },
);
const ArrowTurnLeftDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnLeftDownSolid),
  { ssr: false },
);
const ArrowTurnDownRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnDownRightSolid),
  { ssr: false },
);
const ArrowTurnDownLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnDownLeftSolid),
  { ssr: false },
);
const ArrowTrendUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTrendUpSolid),
  { ssr: false },
);
const ArrowTrendDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTrendDownSolid),
  { ssr: false },
);
const ArrowToShapeRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToShapeRightSolid),
  { ssr: false },
);
const ArrowToShapeDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToShapeDownSolid),
  { ssr: false },
);
const ArrowToLineUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineUpSolid),
  { ssr: false },
);
const ArrowToLineRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineRightSolid),
  { ssr: false },
);
const ArrowToLineLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineLeftSolid),
  { ssr: false },
);
const ArrowToLineDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineDownSolid),
  { ssr: false },
);
const ArrowThinUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinUpSolid),
  { ssr: false },
);
const ArrowThinRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinRightSolid),
  { ssr: false },
);
const ArrowThinLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinLeftSolid),
  { ssr: false },
);
const ArrowThinDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinDownSolid),
  { ssr: false },
);
const ArrowSmallUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallUpSolid),
  { ssr: false },
);
const ArrowSmallRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallRightSolid),
  { ssr: false },
);
const ArrowSmallLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallLeftSolid),
  { ssr: false },
);
const ArrowSmallDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallDownSolid),
  { ssr: false },
);
const ArrowShapeTurnRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowShapeTurnRightSolid),
  { ssr: false },
);
const ArrowShapeTurnLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowShapeTurnLeftSolid),
  { ssr: false },
);
const ArrowRightArrowLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowRightArrowLeftSolid),
  { ssr: false },
);
const ArrowRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowRightSolid),
  { ssr: false },
);
const ArrowLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowLeftSolid),
  { ssr: false },
);
const ArrowFromShapeUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromShapeUpSolid),
  { ssr: false },
);
const ArrowFromShapeRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromShapeRightSolid),
  { ssr: false },
);
const ArrowFromLineUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineUpSolid),
  { ssr: false },
);
const ArrowFromLineRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineRightSolid),
  { ssr: false },
);
const ArrowFromLineLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineLeftSolid),
  { ssr: false },
);
const ArrowFromLineDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineDownSolid),
  { ssr: false },
);
const ArrowDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowDownSolid),
  { ssr: false },
);
const ArrowCwSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCwSolid),
  { ssr: false },
);
const ArrowCircleUpSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleUpSolid),
  { ssr: false },
);
const ArrowCircleRightSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleRightSolid),
  { ssr: false },
);
const ArrowCircleLeftSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleLeftSolid),
  { ssr: false },
);
const ArrowCircleDownSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleDownSolid),
  { ssr: false },
);
const ArrowCcwSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCcwSolid),
  { ssr: false },
);
const Arrow4WaySolid = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow4WaySolid),
  { ssr: false },
);
const Arrow2RectanglePathSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2RectanglePathSolid),
  { ssr: false },
);
const Arrow2CwSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2CwSolid),
  { ssr: false },
);
const ArchiveboxSolid = dynamic(
  () => import("@acme/ui").then((m) => m.ArchiveboxSolid),
  { ssr: false },
);
const AlertTriangleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.AlertTriangleSolid),
  { ssr: false },
);
const AlertCircleSolid = dynamic(
  () => import("@acme/ui").then((m) => m.AlertCircleSolid),
  { ssr: false },
);
const HeartHalfSolid = dynamic(
  () => import("@acme/ui").then((m) => m.HeartHalfSolid),
  { ssr: false },
);
const HalfStarSolid = dynamic(
  () => import("@acme/ui").then((m) => m.HalfStarSolid),
  { ssr: false },
);
const ZoomOutLight = dynamic(
  () => import("@acme/ui").then((m) => m.ZoomOutLight),
  { ssr: false },
);
const GlobeLight = dynamic(() => import("@acme/ui").then((m) => m.GlobeLight), {
  ssr: false,
});
const ZoomInLight = dynamic(
  () => import("@acme/ui").then((m) => m.ZoomInLight),
  { ssr: false },
);
const ZapLight = dynamic(() => import("@acme/ui").then((m) => m.ZapLight), {
  ssr: false,
});
const XmarkSmallLight = dynamic(
  () => import("@acme/ui").then((m) => m.XmarkSmallLight),
  { ssr: false },
);
const XmarkCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.XmarkCircleLight),
  { ssr: false },
);
const XmarkLight = dynamic(() => import("@acme/ui").then((m) => m.XmarkLight), {
  ssr: false,
});
const WiFiLight = dynamic(() => import("@acme/ui").then((m) => m.WiFiLight), {
  ssr: false,
});
const WaveformEcgLight = dynamic(
  () => import("@acme/ui").then((m) => m.WaveformEcgLight),
  { ssr: false },
);
const VideoLight = dynamic(() => import("@acme/ui").then((m) => m.VideoLight), {
  ssr: false,
});
const UsersLight = dynamic(() => import("@acme/ui").then((m) => m.UsersLight), {
  ssr: false,
});
const UserLight = dynamic(() => import("@acme/ui").then((m) => m.UserLight), {
  ssr: false,
});
const UmbrelaLight = dynamic(
  () => import("@acme/ui").then((m) => m.UmbrelaLight),
  { ssr: false },
);
const TrayLight = dynamic(() => import("@acme/ui").then((m) => m.TrayLight), {
  ssr: false,
});
const TrashLight = dynamic(() => import("@acme/ui").then((m) => m.TrashLight), {
  ssr: false,
});
const ThumbsUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ThumbsUpLight),
  { ssr: false },
);
const ThumbsDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ThumbsDownLight),
  { ssr: false },
);
const TextUnderlineLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextUnderlineLight),
  { ssr: false },
);
const TextItalicLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextItalicLight),
  { ssr: false },
);
const TextHeadingLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextHeadingLight),
  { ssr: false },
);
const TextBoldLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextBoldLight),
  { ssr: false },
);
const TextAlignRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignRightLight),
  { ssr: false },
);
const TextAlignLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignLeftLight),
  { ssr: false },
);
const TextAlignJustifyLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignJustifyLight),
  { ssr: false },
);
const TextAlignCenterLight = dynamic(
  () => import("@acme/ui").then((m) => m.TextAlignCenterLight),
  { ssr: false },
);
const TextLight = dynamic(() => import("@acme/ui").then((m) => m.TextLight), {
  ssr: false,
});
const TagLight = dynamic(() => import("@acme/ui").then((m) => m.TagLight), {
  ssr: false,
});
const SunLight = dynamic(() => import("@acme/ui").then((m) => m.SunLight), {
  ssr: false,
});
const StarLight = dynamic(() => import("@acme/ui").then((m) => m.StarLight), {
  ssr: false,
});
const SquareOnSquareLight = dynamic(
  () => import("@acme/ui").then((m) => m.SquareOnSquareLight),
  { ssr: false },
);
const Square4GridLight = dynamic(
  () => import("@acme/ui").then((m) => m.Square4GridLight),
  { ssr: false },
);
const SpeakerXmarkLight = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerXmarkLight),
  { ssr: false },
);
const SpeakerWave2Light = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerWave2Light),
  { ssr: false },
);
const SpeakerWave1Light = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerWave1Light),
  { ssr: false },
);
const SpeakerLight = dynamic(
  () => import("@acme/ui").then((m) => m.SpeakerLight),
  { ssr: false },
);
const Slider3VerticalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Slider3VerticalLight),
  { ssr: false },
);
const Slider3HorizontalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Slider3HorizontalLight),
  { ssr: false },
);
const ShippingboxLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShippingboxLight),
  { ssr: false },
);
const ShieldSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShieldSlashLight),
  { ssr: false },
);
const ShieldLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShieldLight),
  { ssr: false },
);
const ShareLight = dynamic(() => import("@acme/ui").then((m) => m.ShareLight), {
  ssr: false,
});
const ShapeTriangleLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeTriangleLight),
  { ssr: false },
);
const ShapeSquareLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeSquareLight),
  { ssr: false },
);
const ShapeRhombusLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeRhombusLight),
  { ssr: false },
);
const ShapeCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.ShapeCircleLight),
  { ssr: false },
);
const ServerLight = dynamic(
  () => import("@acme/ui").then((m) => m.ServerLight),
  { ssr: false },
);
const SearchLight = dynamic(
  () => import("@acme/ui").then((m) => m.SearchLight),
  { ssr: false },
);
const ScissorsLight = dynamic(
  () => import("@acme/ui").then((m) => m.ScissorsLight),
  { ssr: false },
);
const QuestionCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.QuestionCircleLight),
  { ssr: false },
);
const PrinterLight = dynamic(
  () => import("@acme/ui").then((m) => m.PrinterLight),
  { ssr: false },
);
const PowerLight = dynamic(() => import("@acme/ui").then((m) => m.PowerLight), {
  ssr: false,
});
const PlusSquareLight = dynamic(
  () => import("@acme/ui").then((m) => m.PlusSquareLight),
  { ssr: false },
);
const PlusCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.PlusCircleLight),
  { ssr: false },
);
const PlusLight = dynamic(() => import("@acme/ui").then((m) => m.PlusLight), {
  ssr: false,
});
const PhoneSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneSlashLight),
  { ssr: false },
);
const PhoneOutgoingLight = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneOutgoingLight),
  { ssr: false },
);
const PhoneMissedLight = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneMissedLight),
  { ssr: false },
);
const PhoneIncomingLight = dynamic(
  () => import("@acme/ui").then((m) => m.PhoneIncomingLight),
  { ssr: false },
);
const PhoneLight = dynamic(() => import("@acme/ui").then((m) => m.PhoneLight), {
  ssr: false,
});
const PercentLight = dynamic(
  () => import("@acme/ui").then((m) => m.PercentLight),
  { ssr: false },
);
const PencilLight = dynamic(
  () => import("@acme/ui").then((m) => m.PencilLight),
  { ssr: false },
);
const PenToolLight = dynamic(
  () => import("@acme/ui").then((m) => m.PenToolLight),
  { ssr: false },
);
const PaperPlaneLight = dynamic(
  () => import("@acme/ui").then((m) => m.PaperPlaneLight),
  { ssr: false },
);
const PaperClipLight = dynamic(
  () => import("@acme/ui").then((m) => m.PaperClipLight),
  { ssr: false },
);
const NosignLight = dynamic(
  () => import("@acme/ui").then((m) => m.NosignLight),
  { ssr: false },
);
const MusicNoteLight = dynamic(
  () => import("@acme/ui").then((m) => m.MusicNoteLight),
  { ssr: false },
);
const MoonLight = dynamic(() => import("@acme/ui").then((m) => m.MoonLight), {
  ssr: false,
});
const MinusSquareLight = dynamic(
  () => import("@acme/ui").then((m) => m.MinusSquareLight),
  { ssr: false },
);
const MinusCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.MinusCircleLight),
  { ssr: false },
);
const MinusLight = dynamic(() => import("@acme/ui").then((m) => m.MinusLight), {
  ssr: false,
});
const MicSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.MicSlashLight),
  { ssr: false },
);
const MicLight = dynamic(() => import("@acme/ui").then((m) => m.MicLight), {
  ssr: false,
});
const MessageBubble2Light = dynamic(
  () => import("@acme/ui").then((m) => m.MessageBubble2Light),
  { ssr: false },
);
const MessageBubbleLight = dynamic(
  () => import("@acme/ui").then((m) => m.MessageBubbleLight),
  { ssr: false },
);
const MediaStopCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaStopCircleLight),
  { ssr: false },
);
const MediaStopLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaStopLight),
  { ssr: false },
);
const MediaPlayCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPlayCircleLight),
  { ssr: false },
);
const MediaPlayLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPlayLight),
  { ssr: false },
);
const MediaPauseCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPauseCircleLight),
  { ssr: false },
);
const MediaPauseLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaPauseLight),
  { ssr: false },
);
const MediaForwardEndLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaForwardEndLight),
  { ssr: false },
);
const MediaForwardLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaForwardLight),
  { ssr: false },
);
const MediaBackwardEndLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaBackwardEndLight),
  { ssr: false },
);
const MediaBackwardLight = dynamic(
  () => import("@acme/ui").then((m) => m.MediaBackwardLight),
  { ssr: false },
);
const MedalLight = dynamic(() => import("@acme/ui").then((m) => m.MedalLight), {
  ssr: false,
});
const MapPinLight = dynamic(
  () => import("@acme/ui").then((m) => m.MapPinLight),
  { ssr: false },
);
const LockOpenLight = dynamic(
  () => import("@acme/ui").then((m) => m.LockOpenLight),
  { ssr: false },
);
const LockLight = dynamic(() => import("@acme/ui").then((m) => m.LockLight), {
  ssr: false,
});
const LocationLight = dynamic(
  () => import("@acme/ui").then((m) => m.LocationLight),
  { ssr: false },
);
const ListBulletLight = dynamic(
  () => import("@acme/ui").then((m) => m.ListBulletLight),
  { ssr: false },
);
const LinkAltLight = dynamic(
  () => import("@acme/ui").then((m) => m.LinkAltLight),
  { ssr: false },
);
const LinkLight = dynamic(() => import("@acme/ui").then((m) => m.LinkLight), {
  ssr: false,
});
const Line3Light = dynamic(() => import("@acme/ui").then((m) => m.Line3Light), {
  ssr: false,
});
const LayoutLight = dynamic(
  () => import("@acme/ui").then((m) => m.LayoutLight),
  { ssr: false },
);
const Layers3Light = dynamic(
  () => import("@acme/ui").then((m) => m.Layers3Light),
  { ssr: false },
);
const KeyLight = dynamic(() => import("@acme/ui").then((m) => m.KeyLight), {
  ssr: false,
});
const InfoCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.InfoCircleLight),
  { ssr: false },
);
const ImageLight = dynamic(() => import("@acme/ui").then((m) => m.ImageLight), {
  ssr: false,
});
const HouseLight = dynamic(() => import("@acme/ui").then((m) => m.HouseLight), {
  ssr: false,
});
const HeartLight = dynamic(() => import("@acme/ui").then((m) => m.HeartLight), {
  ssr: false,
});
const HeadphonesLight = dynamic(
  () => import("@acme/ui").then((m) => m.HeadphonesLight),
  { ssr: false },
);
const HashtagLight = dynamic(
  () => import("@acme/ui").then((m) => m.HashtagLight),
  { ssr: false },
);
const GiftboxLight = dynamic(
  () => import("@acme/ui").then((m) => m.GiftboxLight),
  { ssr: false },
);
const GearLight = dynamic(() => import("@acme/ui").then((m) => m.GearLight), {
  ssr: false,
});
const FullscreenExitAltLight = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenExitAltLight),
  { ssr: false },
);
const FullscreenExitLight = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenExitLight),
  { ssr: false },
);
const FullscreenAltLight = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenAltLight),
  { ssr: false },
);
const FullscreenLight = dynamic(
  () => import("@acme/ui").then((m) => m.FullscreenLight),
  { ssr: false },
);
const FolderLight = dynamic(
  () => import("@acme/ui").then((m) => m.FolderLight),
  { ssr: false },
);
const FloppyDiskLight = dynamic(
  () => import("@acme/ui").then((m) => m.FloppyDiskLight),
  { ssr: false },
);
const FlameLight = dynamic(() => import("@acme/ui").then((m) => m.FlameLight), {
  ssr: false,
});
const FilterLight = dynamic(
  () => import("@acme/ui").then((m) => m.FilterLight),
  { ssr: false },
);
const EyeSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.EyeSlashLight),
  { ssr: false },
);
const EyeLight = dynamic(() => import("@acme/ui").then((m) => m.EyeLight), {
  ssr: false,
});
const ExternalLinkLight = dynamic(
  () => import("@acme/ui").then((m) => m.ExternalLinkLight),
  { ssr: false },
);
const EnvelopeLight = dynamic(
  () => import("@acme/ui").then((m) => m.EnvelopeLight),
  { ssr: false },
);
const EmojiSmileLight = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiSmileLight),
  { ssr: false },
);
const EmojiMehLight = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiMehLight),
  { ssr: false },
);
const EmojiFrownLight = dynamic(
  () => import("@acme/ui").then((m) => m.EmojiFrownLight),
  { ssr: false },
);
const Dots9Light = dynamic(() => import("@acme/ui").then((m) => m.Dots9Light), {
  ssr: false,
});
const Dots6VerticalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Dots6VerticalLight),
  { ssr: false },
);
const Dots6HorizontalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Dots6HorizontalLight),
  { ssr: false },
);
const Dots3VerticalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Dots3VerticalLight),
  { ssr: false },
);
const Dots3HorizontalLight = dynamic(
  () => import("@acme/ui").then((m) => m.Dots3HorizontalLight),
  { ssr: false },
);
const DocLight = dynamic(() => import("@acme/ui").then((m) => m.DocLight), {
  ssr: false,
});
const DeviceTabletLight = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceTabletLight),
  { ssr: false },
);
const DeviceMobileLight = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceMobileLight),
  { ssr: false },
);
const DeviceDesktopLight = dynamic(
  () => import("@acme/ui").then((m) => m.DeviceDesktopLight),
  { ssr: false },
);
const DeleteLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.DeleteLeftLight),
  { ssr: false },
);
const CrownLight = dynamic(() => import("@acme/ui").then((m) => m.CrownLight), {
  ssr: false,
});
const CropLight = dynamic(() => import("@acme/ui").then((m) => m.CropLight), {
  ssr: false,
});
const CreditCardLight = dynamic(
  () => import("@acme/ui").then((m) => m.CreditCardLight),
  { ssr: false },
);
const CompassLight = dynamic(
  () => import("@acme/ui").then((m) => m.CompassLight),
  { ssr: false },
);
const CommandLight = dynamic(
  () => import("@acme/ui").then((m) => m.CommandLight),
  { ssr: false },
);
const ColumnsLight = dynamic(
  () => import("@acme/ui").then((m) => m.ColumnsLight),
  { ssr: false },
);
const CloudSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.CloudSlashLight),
  { ssr: false },
);
const CloudDownloadLight = dynamic(
  () => import("@acme/ui").then((m) => m.CloudDownloadLight),
  { ssr: false },
);
const CloudArrowUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.CloudArrowUpLight),
  { ssr: false },
);
const CloudLight = dynamic(() => import("@acme/ui").then((m) => m.CloudLight), {
  ssr: false,
});
const ClockLight = dynamic(() => import("@acme/ui").then((m) => m.ClockLight), {
  ssr: false,
});
const ChevronUpChevronDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronUpChevronDownLight),
  { ssr: false },
);
const ChevronUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronUpLight),
  { ssr: false },
);
const ChevronSmallUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallUpLight),
  { ssr: false },
);
const ChevronSmallRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallRightLight),
  { ssr: false },
);
const ChevronSmallLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallLeftLight),
  { ssr: false },
);
const ChevronSmallDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronSmallDownLight),
  { ssr: false },
);
const ChevronRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronRightLight),
  { ssr: false },
);
const ChevronLeftChevronRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronLeftChevronRightLight),
  { ssr: false },
);
const ChevronLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronLeftLight),
  { ssr: false },
);
const ChevronDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChevronDownLight),
  { ssr: false },
);
const CheckmarkSquareLight = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkSquareLight),
  { ssr: false },
);
const CheckmarkDoubleLight = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkDoubleLight),
  { ssr: false },
);
const CheckmarkCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkCircleLight),
  { ssr: false },
);
const CheckmarkLight = dynamic(
  () => import("@acme/ui").then((m) => m.CheckmarkLight),
  { ssr: false },
);
const Chartbar2Light = dynamic(
  () => import("@acme/ui").then((m) => m.Chartbar2Light),
  { ssr: false },
);
const ChartbarLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChartbarLight),
  { ssr: false },
);
const ChartPieLight = dynamic(
  () => import("@acme/ui").then((m) => m.ChartPieLight),
  { ssr: false },
);
const CartLight = dynamic(() => import("@acme/ui").then((m) => m.CartLight), {
  ssr: false,
});
const CaretUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.CaretUpLight),
  { ssr: false },
);
const CaretRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.CaretRightLight),
  { ssr: false },
);
const CaretLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.CaretLeftLight),
  { ssr: false },
);
const CaretDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.CaretDownLight),
  { ssr: false },
);
const CameraLight = dynamic(
  () => import("@acme/ui").then((m) => m.CameraLight),
  { ssr: false },
);
const CalendarLight = dynamic(
  () => import("@acme/ui").then((m) => m.CalendarLight),
  { ssr: false },
);
const BoxLight = dynamic(() => import("@acme/ui").then((m) => m.BoxLight), {
  ssr: false,
});
const BookmarkLight = dynamic(
  () => import("@acme/ui").then((m) => m.BookmarkLight),
  { ssr: false },
);
const BookOpenLight = dynamic(
  () => import("@acme/ui").then((m) => m.BookOpenLight),
  { ssr: false },
);
const BellSlashLight = dynamic(
  () => import("@acme/ui").then((m) => m.BellSlashLight),
  { ssr: false },
);
const BellLight = dynamic(() => import("@acme/ui").then((m) => m.BellLight), {
  ssr: false,
});
const BagLight = dynamic(() => import("@acme/ui").then((m) => m.BagLight), {
  ssr: false,
});
const AtSignLight = dynamic(
  () => import("@acme/ui").then((m) => m.AtSignLight),
  { ssr: false },
);
const ArrowUpArrowDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowUpArrowDownLight),
  { ssr: false },
);
const ArrowUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowUpLight),
  { ssr: false },
);
const ArrowTurnUpRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnUpRightLight),
  { ssr: false },
);
const ArrowTurnUpLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnUpLeftLight),
  { ssr: false },
);
const ArrowTurnRightUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnRightUpLight),
  { ssr: false },
);
const ArrowTurnRightDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnRightDownLight),
  { ssr: false },
);
const ArrowTurnLeftUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnLeftUpLight),
  { ssr: false },
);
const ArrowTurnLeftDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnLeftDownLight),
  { ssr: false },
);
const ArrowTurnDownRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnDownRightLight),
  { ssr: false },
);
const ArrowTurnDownLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTurnDownLeftLight),
  { ssr: false },
);
const ArrowTrendUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTrendUpLight),
  { ssr: false },
);
const ArrowTrendDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowTrendDownLight),
  { ssr: false },
);
const ArrowToShapeRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToShapeRightLight),
  { ssr: false },
);
const ArrowToShapeDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToShapeDownLight),
  { ssr: false },
);
const ArrowToLineUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineUpLight),
  { ssr: false },
);
const ArrowToLineRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineRightLight),
  { ssr: false },
);
const ArrowToLineLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineLeftLight),
  { ssr: false },
);
const ArrowToLineDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowToLineDownLight),
  { ssr: false },
);
const ArrowThinUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinUpLight),
  { ssr: false },
);
const ArrowThinRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinRightLight),
  { ssr: false },
);
const ArrowThinLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinLeftLight),
  { ssr: false },
);
const ArrowThinDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowThinDownLight),
  { ssr: false },
);
const ArrowSmallUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallUpLight),
  { ssr: false },
);
const ArrowSmallRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallRightLight),
  { ssr: false },
);
const ArrowSmallLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallLeftLight),
  { ssr: false },
);
const ArrowSmallDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowSmallDownLight),
  { ssr: false },
);
const ArrowShapeTurnRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowShapeTurnRightLight),
  { ssr: false },
);
const ArrowShapeTurnLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowShapeTurnLeftLight),
  { ssr: false },
);
const ArrowRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowRightLight),
  { ssr: false },
);
const ArrowLeftArrowRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowLeftArrowRightLight),
  { ssr: false },
);
const ArrowLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowLeftLight),
  { ssr: false },
);
const ArrowFromShapeTopLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromShapeTopLight),
  { ssr: false },
);
const ArrowFromShapeRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromShapeRightLight),
  { ssr: false },
);
const ArrowFromLineUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineUpLight),
  { ssr: false },
);
const ArrowFromLineRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineRightLight),
  { ssr: false },
);
const ArrowFromLineLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineLeftLight),
  { ssr: false },
);
const ArrowFromLineDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowFromLineDownLight),
  { ssr: false },
);
const ArrowDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowDownLight),
  { ssr: false },
);
const ArrowCwLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCwLight),
  { ssr: false },
);
const ArrowCircleUpLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleUpLight),
  { ssr: false },
);
const ArrowCircleRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleRightLight),
  { ssr: false },
);
const ArrowCircleLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleLeftLight),
  { ssr: false },
);
const ArrowCircleDownLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCircleDownLight),
  { ssr: false },
);
const ArrowCcwLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArrowCcwLight),
  { ssr: false },
);
const Arrow4WayLight = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow4WayLight),
  { ssr: false },
);
const Arrow2RectanglePathLight = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2RectanglePathLight),
  { ssr: false },
);
const Arrow2CwLight = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2CwLight),
  { ssr: false },
);
const Arrow2CcwLight = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2CcwLight),
  { ssr: false },
);
const ArchiveboxLight = dynamic(
  () => import("@acme/ui").then((m) => m.ArchiveboxLight),
  { ssr: false },
);
const AlertTriangleLight = dynamic(
  () => import("@acme/ui").then((m) => m.AlertTriangleLight),
  { ssr: false },
);
const AlertCircleLight = dynamic(
  () => import("@acme/ui").then((m) => m.AlertCircleLight),
  { ssr: false },
);
const Arrow2CcwSolid = dynamic(
  () => import("@acme/ui").then((m) => m.Arrow2CcwSolid),
  { ssr: false },
);
const DoubleChevronSmallRightLight = dynamic(
  () => import("@acme/ui").then((m) => m.DoubleChevronSmallRightLight),
  { ssr: false },
);
const DoubleChevronSmallLeftLight = dynamic(
  () => import("@acme/ui").then((m) => m.DoubleChevronSmallLeftLight),
  { ssr: false },
);
const TypeMonoColoredTrue = dynamic(
  () => import("@acme/ui").then((m) => m.TypeMonoColoredTrue),
  { ssr: false },
);
const UseCasePrimary = dynamic(
  () => import("@acme/ui").then((m) => m.UseCasePrimary),
  { ssr: false },
);
const TypeDefault = dynamic(
  () => import("@acme/ui").then((m) => m.TypeDefault),
  { ssr: false },
);

export default function IconGallery(): React.ReactElement {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-2xl font-bold">Icon Gallery</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <IconGrid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            IconGrid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZoomOutSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZoomOutSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZoomInSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZoomInSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZapSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZapSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkSmallSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkSmallSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <WiFiSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            WiFiSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <WaveformEcgSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            WaveformEcgSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <VideoSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            VideoSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UsersSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UsersSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UserSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UserSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UmbrelaSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UmbrelaSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TraySolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TraySolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TrashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TrashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ThumbsUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ThumbsUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ThumbsDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ThumbsDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextUnderlineSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextUnderlineSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextItalicSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextItalicSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextHeadingSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextHeadingSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextBoldSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextBoldSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignJustifySolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignJustifySolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignCenterSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignCenterSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TagSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TagSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SunSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SunSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <StarSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            StarSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SquareOnSquareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SquareOnSquareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Square4GridSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Square4GridSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerXmarkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerXmarkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerWave2Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerWave2Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerWave1Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerWave1Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Slider3VerticalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Slider3VerticalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Slider3HorizontalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Slider3HorizontalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShippingboxSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShippingboxSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShieldSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShieldSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShieldSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShieldSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeTriangleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeTriangleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeSquareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeSquareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeRhombusSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeRhombusSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ServerSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ServerSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SearchSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SearchSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ScissorsSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ScissorsSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <QuestionCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            QuestionCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PrinterSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PrinterSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PowerSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PowerSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusSquareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusSquareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneOutgoingSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneOutgoingSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneMissedSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneMissedSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneIncomingSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneIncomingSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PercentSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PercentSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PencilSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PencilSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PenToolSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PenToolSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PaperPlaneSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PaperPlaneSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PaperClipSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PaperClipSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <NosignSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            NosignSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MusicNoteSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MusicNoteSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MoonSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MoonSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusSquareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusSquareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MicSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MicSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MicSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MicSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MessageBubble2Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MessageBubble2Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MessageBubbleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MessageBubbleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaStopCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaStopCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaStopSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaStopSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPlayCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPlayCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPlaySolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPlaySolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPauseCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPauseCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPauseSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPauseSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaForwardEndSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaForwardEndSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaForwardSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaForwardSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaBackwardEndSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaBackwardEndSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaBackwardSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaBackwardSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MedalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MedalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MapPinSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MapPinSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LockOpenSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LockOpenSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LockSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LockSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LocationSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LocationSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ListBulletSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ListBulletSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LinkAltSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LinkAltSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LinkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LinkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Line3Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Line3Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LayoutSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LayoutSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Layers3Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Layers3Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <KeySolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            KeySolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <InfoCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            InfoCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ImageSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ImageSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HouseSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HouseSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HeartSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HeartSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HeadphonesSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HeadphonesSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HashtagSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HashtagSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <GiftboxSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            GiftboxSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <GearSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            GearSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenExitAltSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenExitAltSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenExitSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenExitSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenAltSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenAltSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FolderSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FolderSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FloppyDiskSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FloppyDiskSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FlameSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FlameSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FilterSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FilterSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EyeSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EyeSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EyeSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EyeSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ExternalLinkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ExternalLinkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EnvelopeSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EnvelopeSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiSmileSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiSmileSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiMehSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiMehSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiFrownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiFrownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots9Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots9Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots6VerticalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots6VerticalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots6HorizontalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots6HorizontalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots3VerticalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots3VerticalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots3HorizontalSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots3HorizontalSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DotSmallSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DotSmallSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DocSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DocSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceTabletSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceTabletSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceMobileSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceMobileSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceDesktopSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceDesktopSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeleteLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeleteLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CrownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CrownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CropSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CropSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CreditCardSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CreditCardSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CompassSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CompassSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CommandSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CommandSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ColumnsSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ColumnsSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudDownloadSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudDownloadSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudArrowUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudArrowUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ClockSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ClockSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronUpChevronDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronUpChevronDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronLeftChevronRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronLeftChevronRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkSquareSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkSquareSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkDoubleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkDoubleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Chartbar2Solid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Chartbar2Solid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChartbarSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChartbarSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChartPieSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChartPieSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CartSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CartSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CameraSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CameraSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CalendarSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CalendarSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BoxSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BoxSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BookmarkSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BookmarkSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BookOpenSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BookOpenSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BellSlashSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BellSlashSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BellSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BellSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BagSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BagSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AtSignSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AtSignSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowUpArrowDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowUpArrowDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnUpRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnUpRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnUpLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnUpLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnRightUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnRightUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnRightDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnRightDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnLeftUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnLeftUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnLeftDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnLeftDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnDownRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnDownRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnDownLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnDownLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTrendUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTrendUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTrendDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTrendDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToShapeRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToShapeRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToShapeDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToShapeDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowShapeTurnRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowShapeTurnRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowShapeTurnLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowShapeTurnLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowRightArrowLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowRightArrowLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromShapeUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromShapeUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromShapeRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromShapeRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCwSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCwSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleUpSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleUpSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleRightSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleRightSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleLeftSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleLeftSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleDownSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleDownSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCcwSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCcwSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow4WaySolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow4WaySolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2RectanglePathSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2RectanglePathSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2CwSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2CwSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArchiveboxSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArchiveboxSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AlertTriangleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AlertTriangleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AlertCircleSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AlertCircleSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HeartHalfSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HeartHalfSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HalfStarSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HalfStarSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZoomOutLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZoomOutLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <GlobeLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            GlobeLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZoomInLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZoomInLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ZapLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ZapLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkSmallLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkSmallLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <XmarkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            XmarkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <WiFiLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            WiFiLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <WaveformEcgLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            WaveformEcgLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <VideoLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            VideoLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UsersLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UsersLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UserLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UserLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UmbrelaLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UmbrelaLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TrayLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TrayLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TrashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TrashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ThumbsUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ThumbsUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ThumbsDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ThumbsDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextUnderlineLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextUnderlineLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextItalicLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextItalicLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextHeadingLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextHeadingLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextBoldLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextBoldLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignJustifyLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignJustifyLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextAlignCenterLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextAlignCenterLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TextLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TextLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TagLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TagLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SunLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SunLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <StarLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            StarLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SquareOnSquareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SquareOnSquareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Square4GridLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Square4GridLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerXmarkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerXmarkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerWave2Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerWave2Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerWave1Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerWave1Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SpeakerLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SpeakerLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Slider3VerticalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Slider3VerticalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Slider3HorizontalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Slider3HorizontalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShippingboxLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShippingboxLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShieldSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShieldSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShieldLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShieldLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeTriangleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeTriangleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeSquareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeSquareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeRhombusLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeRhombusLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ShapeCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ShapeCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ServerLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ServerLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <SearchLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            SearchLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ScissorsLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ScissorsLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <QuestionCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            QuestionCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PrinterLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PrinterLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PowerLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PowerLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusSquareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusSquareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PlusLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PlusLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneOutgoingLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneOutgoingLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneMissedLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneMissedLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneIncomingLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneIncomingLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PhoneLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PhoneLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PercentLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PercentLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PencilLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PencilLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PenToolLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PenToolLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PaperPlaneLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PaperPlaneLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <PaperClipLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            PaperClipLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <NosignLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            NosignLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MusicNoteLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MusicNoteLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MoonLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MoonLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusSquareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusSquareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MinusLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MinusLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MicSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MicSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MicLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MicLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MessageBubble2Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MessageBubble2Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MessageBubbleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MessageBubbleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaStopCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaStopCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaStopLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaStopLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPlayCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPlayCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPlayLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPlayLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPauseCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPauseCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaPauseLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaPauseLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaForwardEndLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaForwardEndLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaForwardLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaForwardLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaBackwardEndLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaBackwardEndLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MediaBackwardLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MediaBackwardLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MedalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MedalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <MapPinLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            MapPinLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LockOpenLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LockOpenLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LockLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LockLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LocationLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LocationLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ListBulletLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ListBulletLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LinkAltLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LinkAltLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LinkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LinkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Line3Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Line3Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <LayoutLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            LayoutLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Layers3Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Layers3Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <KeyLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            KeyLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <InfoCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            InfoCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ImageLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ImageLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HouseLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HouseLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HeartLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HeartLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HeadphonesLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HeadphonesLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <HashtagLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            HashtagLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <GiftboxLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            GiftboxLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <GearLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            GearLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenExitAltLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenExitAltLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenExitLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenExitLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenAltLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenAltLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FullscreenLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FullscreenLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FolderLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FolderLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FloppyDiskLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FloppyDiskLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FlameLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FlameLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <FilterLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            FilterLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EyeSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EyeSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EyeLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EyeLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ExternalLinkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ExternalLinkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EnvelopeLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EnvelopeLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiSmileLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiSmileLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiMehLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiMehLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <EmojiFrownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            EmojiFrownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots9Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots9Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots6VerticalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots6VerticalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots6HorizontalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots6HorizontalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots3VerticalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots3VerticalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Dots3HorizontalLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Dots3HorizontalLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DocLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DocLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceTabletLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceTabletLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceMobileLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceMobileLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeviceDesktopLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeviceDesktopLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DeleteLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DeleteLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CrownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CrownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CropLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CropLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CreditCardLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CreditCardLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CompassLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CompassLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CommandLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CommandLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ColumnsLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ColumnsLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudDownloadLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudDownloadLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudArrowUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudArrowUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CloudLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CloudLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ClockLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ClockLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronUpChevronDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronUpChevronDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronSmallDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronSmallDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronLeftChevronRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronLeftChevronRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChevronDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChevronDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkSquareLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkSquareLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkDoubleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkDoubleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CheckmarkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CheckmarkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Chartbar2Light size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Chartbar2Light
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChartbarLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChartbarLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ChartPieLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ChartPieLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CartLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CartLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CaretDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CaretDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CameraLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CameraLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <CalendarLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            CalendarLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BoxLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BoxLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BookmarkLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BookmarkLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BookOpenLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BookOpenLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BellSlashLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BellSlashLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BellLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BellLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <BagLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            BagLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AtSignLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AtSignLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowUpArrowDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowUpArrowDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnUpRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnUpRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnUpLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnUpLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnRightUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnRightUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnRightDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnRightDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnLeftUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnLeftUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnLeftDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnLeftDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnDownRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnDownRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTurnDownLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTurnDownLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTrendUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTrendUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowTrendDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowTrendDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToShapeRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToShapeRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToShapeDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToShapeDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowToLineDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowToLineDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowThinDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowThinDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowSmallDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowSmallDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowShapeTurnRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowShapeTurnRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowShapeTurnLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowShapeTurnLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowLeftArrowRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowLeftArrowRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromShapeTopLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromShapeTopLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromShapeRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromShapeRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowFromLineDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowFromLineDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCwLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCwLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleUpLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleUpLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCircleDownLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCircleDownLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArrowCcwLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArrowCcwLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow4WayLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow4WayLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2RectanglePathLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2RectanglePathLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2CwLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2CwLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2CcwLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2CcwLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <ArchiveboxLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            ArchiveboxLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AlertTriangleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AlertTriangleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <AlertCircleLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            AlertCircleLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <Arrow2CcwSolid size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            Arrow2CcwSolid
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DoubleChevronSmallRightLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DoubleChevronSmallRightLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <DoubleChevronSmallLeftLight size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            DoubleChevronSmallLeftLight
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TypeMonoColoredTrue size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TypeMonoColoredTrue
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <UseCasePrimary size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            UseCasePrimary
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-slate-50">
          <TypeDefault size={32} />
          <span className="mt-2 text-center text-xs text-slate-500">
            TypeDefault
          </span>
        </div>
      </div>
    </div>
  );
}
