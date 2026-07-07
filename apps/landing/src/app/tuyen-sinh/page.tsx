"use client";

import type { DefaultValues, FieldErrors, Resolver } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ImageIcon,
  LoaderCircle,
  UploadCloud,
} from "lucide-react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Calendar,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
} from "@acme/ui";

const provinces = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "TP. Hồ Chí Minh",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

interface AdministrativeWard {
  name: string;
}

interface AdministrativeDistrict {
  wards?: AdministrativeWard[];
}

interface AdministrativeProvince {
  name: string;
  wards?: AdministrativeWard[];
  districts?: AdministrativeDistrict[];
}

interface ProvinceOption {
  name: string;
  wards: string[];
}

const ethnicities = [
  "Kinh",
  "Tày",
  "Thái",
  "Mường",
  "Khmer",
  "Mông",
  "Nùng",
  "Hoa",
  "Dao",
  "Gia Rai",
  "Ê Đê",
  "Ba Na",
  "Sán Chay",
  "Chăm",
  "Cơ Ho",
  "Xơ Đăng",
  "Sán Dìu",
  "Hrê",
  "Kháng",
  "Ra Glai",
  "Mnông",
  "Thổ",
  "Stiêng",
  "Khơ Mú",
  "Bru - Vân Kiều",
  "Cơ Tu",
  "Giáy",
  "Tà Ôi",
  "Mạ",
  "Co",
  "Chơ Ro",
  "Xinh Mun",
  "Hà Nhì",
  "Chu Ru",
  "Lào",
  "La Chí",
  "La Ha",
  "Phù Lá",
  "La Hủ",
  "Lự",
  "Lô Lô",
  "Chứt",
  "Mảng",
  "Pà Thẻn",
  "Cơ Lao",
  "Cống",
  "Bố Y",
  "Si La",
  "Pu Péo",
  "Brâu",
  "Ơ Đu",
  "Rơ Măm",
  "Ngái",
  "Giẻ Triêng",
];

const religionOptions = [
  "Không",
  "Phật giáo",
  "Công giáo",
  "Tin Lành",
  "Cao Đài",
  "Hòa Hảo",
  "Hồi giáo",
];

const majorOptions = [
  "Kế toán",
  "Quản trị kinh doanh",
  "Luật",
  "Công nghệ thông tin",
] as const;

const specializationByMajor: Record<(typeof majorOptions)[number], string[]> = {
  "Kế toán": ["Kế toán doanh nghiệp", "Kế toán công"],
  "Quản trị kinh doanh": ["Quản trị doanh nghiệp", "Marketing"],
  Luật: ["Luật dân sự", "Luật kinh tế"],
  "Công nghệ thông tin": ["Công nghệ phần mềm", "Hệ thống thông tin"],
};

const maxFileSize = 5 * 1024 * 1024;

const isFileList = (value: unknown): value is FileList =>
  typeof FileList !== "undefined" && value instanceof FileList;

const getFirstFile = (value: unknown) =>
  isFileList(value) && value.length > 0 ? value.item(0) : null;

const requiredFileSchema = (types: string[], typeMessage: string) =>
  z
    .custom<FileList>(
      (value) => isFileList(value) && value.length > 0,
      "Vui lòng chọn file",
    )
    .refine((value) => {
      const file = getFirstFile(value);

      return !file || file.size <= maxFileSize;
    }, "Dung lượng file không quá 5MB")
    .refine((value) => {
      const file = getFirstFile(value);

      return !file || types.includes(file.type);
    }, typeMessage);

const optionalFileSchema = (types: string[], typeMessage: string) =>
  z
    .custom<FileList | undefined>((value) => {
      if (!value) return true;
      if (!isFileList(value) || value.length === 0) return true;

      const file = getFirstFile(value);

      return !!file && file.size <= maxFileSize && types.includes(file.type);
    }, typeMessage)
    .optional();

const imageFileSchema = optionalFileSchema(
  ["image/jpeg", "image/png"],
  "File ảnh phải là .jpg, .jpeg hoặc .png và không quá 5MB",
);

const pdfFileSchema = requiredFileSchema(
  ["application/pdf"],
  "File minh chứng phải là PDF",
);

const formSchema = z.object({
  hoVaTen: z.string().trim().min(1, "Vui lòng nhập họ và tên"),
  gioiTinh: z.string().min(1, "Vui lòng chọn giới tính"),
  ngaySinh: dateStringSchema("Vui lòng chọn ngày sinh"),
  noiSinh: z.string().min(1, "Vui lòng chọn nơi sinh"),
  cccd: z
    .string()
    .trim()
    .regex(/^\d{12}$/, "CCCD phải gồm đúng 12 số"),
  ngayCapCccd: dateStringSchema("Vui lòng chọn ngày cấp CCCD"),
  noiCapCccd: z.string().trim().min(1, "Vui lòng nhập nơi cấp CCCD"),
  soDienThoai: z
    .string()
    .trim()
    .regex(/^0\d{9}$/, "Số điện thoại phải gồm 10 số và bắt đầu bằng 0"),
  email: z.string().trim().email("Email chưa đúng định dạng"),
  danToc: z.string().min(1, "Vui lòng chọn dân tộc"),
  tonGiao: z.string().optional(),
  tinhThuongTru: z.string().min(1, "Vui lòng chọn tỉnh/thành phố thường trú"),
  xaThuongTru: z.string().trim().min(1, "Vui lòng nhập xã/phường thường trú"),
  diaChiThuongTru: z.string().trim().min(1, "Vui lòng nhập địa chỉ thường trú"),
  tinhHienNay: z.string().optional(),
  xaHienNay: z.string().optional(),
  diaChiHienNay: z.string().optional(),
  ngheNghiep: z.string().optional(),
  noiLamViec: z.string().optional(),
  bangTotNghiep: z.string().min(1, "Vui lòng chọn bằng tốt nghiệp"),
  namTotNghiep: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Năm tốt nghiệp phải gồm 4 chữ số")
    .refine((value) => {
      if (!/^\d{4}$/.test(value)) return true;

      const year = Number(value);
      const currentYear = new Date().getFullYear();

      return year >= 1950 && year <= currentYear + 1;
    }, "Năm tốt nghiệp không hợp lệ"),
  noiHocTruocDay: z.string().trim().min(1, "Vui lòng nhập nơi học trước đây"),
  doiTuongUuTien: z.string().optional(),
  heDangKy: z.string().min(1, "Vui lòng chọn hệ đăng ký"),
  nganhDangKy: z.string().min(1, "Vui lòng chọn ngành đăng ký"),
  chuyenNganh: z.string().min(1, "Vui lòng chọn chuyên ngành"),
  diemTbcht: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập điểm TBC học tập")
    .refine((value) => /^\d{1,2}(\.\d)?$/.test(value), {
      message: "Điểm TBC chỉ nhập tối đa 1 chữ số thập phân",
    })
    .refine((value) => {
      if (!/^\d{1,2}(\.\d)?$/.test(value)) return true;

      const score = Number(value);

      return score >= 0 && score <= 10;
    }, "Điểm TBC phải từ 0 đến 10"),
  anhThe: imageFileSchema,
  anhCccdTruoc: imageFileSchema,
  anhCccdSau: imageFileSchema,
  minhChungBangTotNghiep: pdfFileSchema,
  minhChungBangDiem: pdfFileSchema,
  minhChungGiayKhaiSinh: pdfFileSchema,
  minhChungUuTien: optionalFileSchema(
    ["application/pdf"],
    "File minh chứng phải là PDF và không quá 5MB",
  ),
});

type FormValues = z.infer<typeof formSchema>;
type FileFieldName =
  | "anhThe"
  | "anhCccdTruoc"
  | "anhCccdSau"
  | "minhChungBangTotNghiep"
  | "minhChungBangDiem"
  | "minhChungGiayKhaiSinh"
  | "minhChungUuTien";
type TextFormFieldName = Exclude<keyof FormValues, FileFieldName>;
type PdfFieldName = Extract<
  FileFieldName,
  | "minhChungBangTotNghiep"
  | "minhChungBangDiem"
  | "minhChungGiayKhaiSinh"
  | "minhChungUuTien"
>;

const formResolver: Resolver<FormValues> = async (values) => {
  const result = await formSchema.safeParseAsync(values);

  if (result.success) {
    return {
      values: result.data,
      errors: {},
    };
  }

  const errors: FieldErrors<FormValues> = {};

  result.error.issues.forEach((issue) => {
    const fieldName = issue.path[0] as keyof FormValues | undefined;

    if (!fieldName || errors[fieldName]) return;

    errors[fieldName] = {
      type: issue.code,
      message: issue.message,
    };
  });

  return {
    values: {},
    errors,
  };
};

const uploadFieldNames: FileFieldName[] = [
  "anhThe",
  "anhCccdTruoc",
  "anhCccdSau",
  "minhChungBangTotNghiep",
  "minhChungBangDiem",
  "minhChungGiayKhaiSinh",
  "minhChungUuTien",
];

const defaultValues = {
  hoVaTen: "",
  gioiTinh: "",
  ngaySinh: "",
  noiSinh: "",
  cccd: "",
  ngayCapCccd: "",
  noiCapCccd:
    "Cục Cảnh sát đăng ký, quản lý cư trú và dữ liệu quốc gia về dân cư",
  soDienThoai: "",
  email: "",
  danToc: "",
  tonGiao: "",
  tinhThuongTru: "",
  xaThuongTru: "",
  diaChiThuongTru: "",
  tinhHienNay: "",
  xaHienNay: "",
  diaChiHienNay: "",
  ngheNghiep: "",
  noiLamViec: "",
  bangTotNghiep: "",
  namTotNghiep: "",
  noiHocTruocDay: "",
  doiTuongUuTien: "",
  heDangKy: "Đại học văn bằng 2 (VLVH)",
  nganhDangKy: "",
  chuyenNganh: "",
  diemTbcht: "",
} satisfies DefaultValues<FormValues>;

const fieldClassName =
  "h-9 rounded border-gray-300 bg-white text-sm focus-visible:ring-green-700/20";
const formMessageClassName = "text-xs font-semibold text-red-600";

const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/);
  const ten = parts.pop() ?? "";

  return {
    hoDem: parts.join(" "),
    ten,
  };
};

const normalizeOptionName = (value: string) =>
  value
    .trim()
    .replace(/^(Tỉnh|Thành phố|TP\.)\s+/i, "")
    .replace(/^(Xã|Phường|Thị trấn)\s+/i, "")
    .toLocaleLowerCase("vi-VN");

const dedupeOptions = (values: string[]) => {
  const seen = new Set<string>();

  return values.filter((value) => {
    const key = normalizeOptionName(value);
    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
};

const findProvince = (options: ProvinceOption[], selectedName: string) => {
  const selectedKey = normalizeOptionName(selectedName);

  return options.find(
    (option) => normalizeOptionName(option.name) === selectedKey,
  );
};

const fallbackProvinceOptions: ProvinceOption[] = provinces.map((name) => ({
  name,
  wards: [],
}));

const administrativeApiUrls = [
  "https://provinces.open-api.vn/api/v2/?depth=2",
  "https://provinces.open-api.vn/api/v1/?depth=3",
];

const toProvinceOptions = (data: AdministrativeProvince[]) =>
  data.map((province) => ({
    name: province.name,
    wards: dedupeOptions(
      province.wards?.map((ward) => ward.name) ??
        province.districts?.flatMap(
          (district) => district.wards?.map((ward) => ward.name) ?? [],
        ) ??
        [],
    ),
  }));

const loadProvinceOptions = async () => {
  for (const url of administrativeApiUrls) {
    try {
      const response = await fetch(url);

      if (!response.ok) continue;

      const data = (await response.json()) as AdministrativeProvince[];
      const provinceOptions = toProvinceOptions(data);

      if (provinceOptions.some((province) => province.wards.length > 0)) {
        return provinceOptions;
      }
    } catch {
      continue;
    }
  }

  return fallbackProvinceOptions;
};

function formatDate(date: Date) {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function parseDate(value?: string) {
  if (!value) return undefined;

  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return undefined;

  const [, day, month, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  if (
    date.getDate() !== Number(day) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getFullYear() !== Number(year)
  ) {
    return undefined;
  }

  return date;
}

function dateStringSchema(message: string) {
  return z
    .string()
    .trim()
    .min(1, message)
    .refine(
      (value) => value.length === 0 || !!parseDate(value),
      "Ngày phải đúng định dạng dd/MM/yyyy",
    );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="relative rounded border border-green-800 px-4 pt-7 pb-5">
      <legend className="absolute -top-3 left-7 bg-white px-2 text-sm font-bold text-blue-700 uppercase">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

function RequiredMark() {
  return <span className="text-red-600"> (*)</span>;
}

function TextField({
  name,
  label,
  required,
  className,
  inputClassName,
  ...inputProps
}: React.ComponentProps<typeof Input> & {
  name: TextFormFieldName;
  label: string;
  required?: boolean;
  inputClassName?: string;
}) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-1", className)}>
          <FormLabel className="text-sm font-bold text-gray-900">
            {label}
            {required ? <RequiredMark /> : null}
          </FormLabel>
          <FormControl>
            <Input
              {...inputProps}
              {...field}
              className={cn(fieldClassName, inputClassName)}
            />
          </FormControl>
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
}

function DatePickerField({
  name,
  label,
  required,
}: {
  name: Extract<TextFormFieldName, "ngaySinh" | "ngayCapCccd">;
  label: string;
  required?: boolean;
}) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedDate =
          typeof field.value === "string" ? parseDate(field.value) : undefined;

        return (
          <FormItem className="space-y-1">
            <FormLabel className="text-sm font-bold text-gray-900">
              {label}
              {required ? <RequiredMark /> : null}
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    className={cn(
                      fieldClassName,
                      "w-full justify-start px-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                    variant="outline"
                    type="button"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-green-800" />
                    {field.value ? field.value : "dd/mm/yyyy"}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  captionLayout="dropdown"
                  fromYear={1950}
                  toYear={new Date().getFullYear() + 1}
                  onSelect={(date) => {
                    if (date) field.onChange(formatDate(date));
                  }}
                />
              </PopoverContent>
            </Popover>
            <FormMessage className={formMessageClassName} />
          </FormItem>
        );
      }}
    />
  );
}

function TextareaField({
  name,
  label,
  required,
  className,
  placeholder,
}: {
  name: TextFormFieldName;
  label: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-1", className)}>
          <FormLabel className="text-sm font-bold text-gray-900">
            {label}
            {required ? <RequiredMark /> : null}
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              className="min-h-9 rounded border-gray-300 bg-white text-sm focus-visible:ring-green-700/20"
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
  disabled,
  onValueChange,
}: {
  name: TextFormFieldName;
  label: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="text-sm font-bold text-gray-900">
            {label}
            {required ? <RequiredMark /> : null}
          </FormLabel>
          <Select
            disabled={disabled}
            value={
              typeof field.value === "string" && field.value.length > 0
                ? field.value
                : undefined
            }
            onValueChange={(value) => {
              field.onChange(value);
              onValueChange?.(value);
            }}
          >
            <FormControl>
              <SelectTrigger className={fieldClassName}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent
              className="z-[9999] max-h-72 w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] overflow-y-auto border-gray-200 bg-white shadow-lg"
              position="popper"
              sideOffset={4}
            >
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
}

function WardField({
  name,
  label,
  provinceName,
  options,
  required,
  isLoading,
}: {
  name: Extract<TextFormFieldName, "xaThuongTru" | "xaHienNay">;
  label: string;
  provinceName?: string;
  options: string[];
  required?: boolean;
  isLoading: boolean;
}) {
  if (options.length > 0 || !provinceName) {
    return (
      <SelectField
        name={name}
        label={label}
        options={options}
        placeholder={
          isLoading
            ? "Đang tải xã/phường..."
            : provinceName
              ? "-- Xã/Phường --"
              : "Chọn tỉnh/thành phố trước"
        }
        required={required}
        disabled={!provinceName || isLoading}
      />
    );
  }

  return (
    <TextField
      name={name}
      label={label}
      placeholder="Nhập xã/phường"
      required={required}
    />
  );
}

function FileButtonText({ fileList }: { fileList: unknown }) {
  const file = getFirstFile(fileList);
  const fileName = file?.name ?? "Chưa có tệp nào được chọn";

  return (
    <span
      className="block max-w-full min-w-0 truncate px-1 text-sm text-gray-900"
      title={fileName}
    >
      {fileName}
    </span>
  );
}

function ImagePreview({ fileList }: { fileList: unknown }) {
  const file = getFirstFile(fileList);
  const previewUrl = useMemo(() => {
    if (!file) return "";

    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    if (!previewUrl) return;

    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  if (!previewUrl) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-gray-400">
        <ImageIcon className="h-8 w-8" />
      </div>
    );
  }

  return (
    <Image
      className="h-24 w-24 rounded-lg border border-gray-200 object-cover shadow-sm"
      src={previewUrl}
      alt={file?.name ?? "Ảnh đã chọn"}
      width={96}
      height={96}
      unoptimized
    />
  );
}

function ImageUploadField({
  name,
  label,
}: {
  name: FileFieldName;
  label: string;
}) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="min-w-0 space-y-1">
          <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded border border-dashed border-gray-500 bg-white px-4 py-4 text-sm transition hover:border-green-700 hover:bg-green-50/30">
            <FormControl>
              <Input
                className="sr-only"
                type="file"
                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                name={field.name}
                ref={field.ref}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(event.target.files)}
              />
            </FormControl>
            <ImagePreview fileList={field.value} />
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-2 font-semibold text-white">
                <UploadCloud className="h-4 w-4" />
                Chọn tệp
              </span>
              <span className="max-w-full min-w-0 text-center font-medium text-gray-900">
                {label}
              </span>
            </div>
          </label>
          <FileButtonText fileList={field.value} />
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
}

function PdfUploadField({ name }: { name: PdfFieldName }) {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="min-w-[280px] space-y-1">
          <label className="flex h-9 cursor-pointer overflow-hidden rounded border border-gray-300 bg-white text-sm transition hover:border-green-700">
            <FormControl>
              <Input
                className="sr-only"
                type="file"
                accept="application/pdf,.pdf"
                name={field.name}
                ref={field.ref}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(event.target.files)}
              />
            </FormControl>
            <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3">
              Chọn tệp
            </span>
            <span
              className="flex min-w-0 flex-1 items-center truncate px-3 text-gray-700"
              title={
                getFirstFile(field.value)?.name ?? "Chưa có tệp nào được chọn"
              }
            >
              {getFirstFile(field.value)?.name ?? "Chưa có tệp nào được chọn"}
            </span>
          </label>
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
}

export default function TuyenSinhPage() {
  const [successCode, setSuccessCode] = useState("");
  const [serverError, setServerError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [provinceOptions, setProvinceOptions] = useState<ProvinceOption[]>(
    fallbackProvinceOptions,
  );
  const [isAdministrativeLoading, setIsAdministrativeLoading] = useState(true);
  const [selectedMajor, setSelectedMajor] = useState<
    (typeof majorOptions)[number] | ""
  >("");
  const form = useForm<FormValues>({
    resolver: formResolver,
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const specializations = selectedMajor
    ? specializationByMajor[selectedMajor]
    : [];
  const selectedPermanentProvince = form.watch("tinhThuongTru");
  const selectedCurrentProvince = form.watch("tinhHienNay");
  const provinceNames = useMemo(
    () => provinceOptions.map((province) => province.name),
    [provinceOptions],
  );
  const permanentWardOptions = useMemo(
    () =>
      selectedPermanentProvince
        ? (findProvince(provinceOptions, selectedPermanentProvince)?.wards ??
          [])
        : [],
    [provinceOptions, selectedPermanentProvince],
  );
  const currentWardOptions = useMemo(
    () =>
      selectedCurrentProvince
        ? (findProvince(provinceOptions, selectedCurrentProvince)?.wards ?? [])
        : [],
    [provinceOptions, selectedCurrentProvince],
  );
  const isSubmitting = form.formState.isSubmitting;

  useEffect(() => {
    let isMounted = true;

    const loadAdministrativeUnits = async () => {
      try {
        const nextProvinceOptions = await loadProvinceOptions();

        if (isMounted && nextProvinceOptions.length > 0) {
          setProvinceOptions(nextProvinceOptions);
        }
      } catch {
        if (isMounted) setProvinceOptions(fallbackProvinceOptions);
      } finally {
        if (isMounted) setIsAdministrativeLoading(false);
      }
    };

    void loadAdministrativeUnits();

    return () => {
      isMounted = false;
    };
  }, []);

  const onSubmit = async (values: FormValues) => {
    setSuccessCode("");
    setServerError("");
    setValidationError("");

    const { hoDem, ten } = splitFullName(values.hoVaTen);
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (uploadFieldNames.includes(key as FileFieldName)) return;
      if (typeof value === "string") formData.append(key, value);
    });

    formData.append("hoDem", hoDem);
    formData.append("ten", ten);

    uploadFieldNames.forEach((name) => {
      const file = getFirstFile(values[name]);

      if (file) formData.append(name, file);
    });

    let response: Response;

    try {
      response = await fetch("/api/submit-hoso", {
        method: "POST",
        body: formData,
      });
    } catch {
      setServerError(
        "Không thể kết nối tới hệ thống nộp hồ sơ. Vui lòng thử lại sau.",
      );
      return;
    }

    const result = (await response.json().catch(() => ({
      success: false,
      message: "Phản hồi từ máy chủ không hợp lệ. Vui lòng thử lại sau.",
    }))) as {
      success: boolean;
      maHoSo?: string;
      message: string;
    };

    if (!response.ok || !result.success || !result.maHoSo) {
      setServerError(result.message || "Có lỗi xảy ra");
      return;
    }

    setSuccessCode(result.maHoSo);
    setSelectedMajor("");
    form.reset(defaultValues);
  };

  const onInvalid = (errors: FieldErrors<FormValues>) => {
    const errorCount = Object.keys(errors).length;

    setSuccessCode("");
    setServerError("");
    setValidationError(
      errorCount > 0
        ? `Vui lòng kiểm tra lại ${errorCount} trường thông tin chưa hợp lệ.`
        : "Vui lòng kiểm tra lại thông tin hồ sơ.",
    );

    window.requestAnimationFrame(() => {
      document
        .getElementById("tuyen-sinh-validation-alert")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-gray-950 md:px-8">
      <div className="mx-auto w-full" style={{ maxWidth: 1200 }}>
        <h1 className="mb-4 text-center text-3xl font-semibold text-gray-900 md:text-4xl">
          Đại học văn bằng 2 VLVH (TP. Hồ Chí Minh)
        </h1>

        <div className="mb-8 rounded border border-cyan-200 bg-cyan-100 px-4 py-4 text-sm text-gray-800">
          <p>Mã hồ sơ:</p>
          <p>
            Trạng thái hồ sơ:{" "}
            <span className="font-bold">Hồ sơ chờ xét duyệt</span>
          </p>
          <p>
            Trạng thái lệ phí xét tuyển:{" "}
            <span className="font-bold">Chờ cập nhật</span>
          </p>
        </div>

        {successCode ? (
          <Alert className="mb-6 border-green-600 bg-green-50 text-green-900">
            <AlertTitle>Đăng ký thành công!</AlertTitle>
            <AlertDescription>
              Mã hồ sơ của bạn: <strong>{successCode}</strong>
            </AlertDescription>
          </Alert>
        ) : null}

        {serverError ? (
          <Alert className="mb-6 border-red-600 bg-red-50 text-red-900">
            <AlertTitle>Không thể nộp hồ sơ</AlertTitle>
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        ) : null}

        {validationError ? (
          <Alert
            className="mb-6 border-red-600 bg-red-50 text-red-900"
            id="tuyen-sinh-validation-alert"
          >
            <AlertTitle>Hồ sơ chưa hợp lệ</AlertTitle>
            <AlertDescription>{validationError}</AlertDescription>
          </Alert>
        ) : null}

        <Form {...form}>
          <form
            className="space-y-10"
            noValidate
            onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          >
            <Section title="1. Đăng ký thông tin thí sinh">
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-3">
                <TextField name="hoVaTen" label="Họ tên" required />
                <SelectField
                  name="gioiTinh"
                  label="Giới tính"
                  options={["Nam", "Nữ"]}
                  placeholder="-- Giới tính --"
                  required
                />
                <DatePickerField name="ngaySinh" label="Ngày sinh" required />
                <SelectField
                  name="noiSinh"
                  label="Nơi sinh"
                  options={provinceNames}
                  placeholder="-- Tỉnh thành --"
                  required
                />
                <TextField
                  name="cccd"
                  label="Số CCCD"
                  inputMode="numeric"
                  maxLength={12}
                  required
                />
                <DatePickerField
                  name="ngayCapCccd"
                  label="Ngày cấp CCCD"
                  required
                />
                <TextField name="noiCapCccd" label="Nơi cấp CCCD" required />
                <TextField
                  name="soDienThoai"
                  label="Điện thoại"
                  inputMode="tel"
                  maxLength={10}
                  required
                />
                <TextField name="email" label="Email" type="email" required />
                <SelectField
                  name="danToc"
                  label="Dân tộc"
                  options={ethnicities}
                  placeholder="-- Dân tộc --"
                  required
                />
                <SelectField
                  name="tonGiao"
                  label="Tôn giáo"
                  options={religionOptions}
                  placeholder="-- Tôn giáo --"
                />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                <ImageUploadField name="anhThe" label="Ảnh thẻ (3x4)" />
                <ImageUploadField
                  name="anhCccdTruoc"
                  label="Ảnh CCCD mặt trước"
                />
                <ImageUploadField name="anhCccdSau" label="Ảnh CCCD mặt sau" />
              </div>
              <p className="mt-2 text-sm font-medium text-red-600">
                Lưu ý: File ảnh thẻ, ảnh CCCD là định dạng .jpg, .jpeg, .png và
                dung lượng không quá 5Mb
              </p>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-3">
                <SelectField
                  name="tinhThuongTru"
                  label="Tỉnh/TP thường trú"
                  options={provinceNames}
                  placeholder="-- Tỉnh thành --"
                  required
                  disabled={isAdministrativeLoading}
                  onValueChange={() => {
                    form.setValue("xaThuongTru", "", { shouldValidate: true });
                  }}
                />
                <WardField
                  name="xaThuongTru"
                  label="Xã/Phường thường trú"
                  provinceName={selectedPermanentProvince}
                  options={permanentWardOptions}
                  required
                  isLoading={isAdministrativeLoading}
                />
                <TextField
                  name="diaChiThuongTru"
                  label="Địa chỉ thường trú"
                  required
                />
                <SelectField
                  name="tinhHienNay"
                  label="Tỉnh/TP ở hiện nay"
                  options={provinceNames}
                  placeholder="-- Tỉnh thành --"
                  disabled={isAdministrativeLoading}
                  onValueChange={() => {
                    form.setValue("xaHienNay", "", { shouldValidate: true });
                  }}
                />
                <WardField
                  name="xaHienNay"
                  label="Xã/Phường ở hiện nay"
                  provinceName={selectedCurrentProvince}
                  options={currentWardOptions}
                  isLoading={isAdministrativeLoading}
                />
                <TextField name="diaChiHienNay" label="Địa chỉ ở hiện nay" />
                <TextField
                  name="ngheNghiep"
                  label="Nghề nghiệp/Chức vụ"
                  className="md:col-span-3"
                />
                <TextField
                  name="noiLamViec"
                  label="Nơi làm việc"
                  className="md:col-span-3"
                />
                <SelectField
                  name="bangTotNghiep"
                  label="Bằng tốt nghiệp đã có"
                  options={["THPT", "CĐ", "ĐH"]}
                  placeholder="-- Bằng tốt nghiệp --"
                  required
                />
                <TextField
                  name="namTotNghiep"
                  label="Năm tốt nghiệp"
                  inputMode="numeric"
                  maxLength={4}
                  required
                />
                <TextareaField
                  name="noiHocTruocDay"
                  label="Nơi học trước đây (ghi tên trường và địa chỉ trường)"
                  required
                />
                <div className="md:col-span-3">
                  <SelectField
                    name="doiTuongUuTien"
                    label="Đối tượng ưu tiên"
                    options={["UT1", "UT2", "Không có"]}
                    placeholder="-- Đối tượng ưu tiên --"
                  />
                </div>
              </div>
            </Section>

            <Section title="2. Ngành đăng ký">
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-3">
                <SelectField
                  name="heDangKy"
                  label="Hệ"
                  options={["Đại học văn bằng 2 (VLVH)"]}
                  disabled
                />
                <SelectField
                  name="nganhDangKy"
                  label="Ngành"
                  options={majorOptions}
                  placeholder="-- Ngành --"
                  required
                  onValueChange={(value) => {
                    const major = value as (typeof majorOptions)[number];
                    setSelectedMajor(major);
                    form.setValue(
                      "chuyenNganh",
                      specializationByMajor[major][0] ?? "",
                      { shouldValidate: true },
                    );
                  }}
                />
                <SelectField
                  name="chuyenNganh"
                  label="Chuyên ngành"
                  options={specializations}
                  placeholder="-- Chuyên ngành --"
                  required
                  disabled={!selectedMajor}
                />
                <TextField
                  name="diemTbcht"
                  label="Điểm TBC học tập"
                  inputMode="decimal"
                  required
                />
              </div>
            </Section>

            <Section title="3. File minh chứng">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-16 font-bold text-gray-900">
                      STT
                    </TableHead>
                    <TableHead className="font-bold text-gray-900">
                      Tên minh chứng
                    </TableHead>
                    <TableHead className="font-bold text-gray-900">#</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      label: "Bằng tốt nghiệp THPT/CĐ/ĐH",
                      name: "minhChungBangTotNghiep" as const,
                      required: true,
                    },
                    {
                      label: "Học bạ THPT/Bảng điểm CĐ/ĐH",
                      name: "minhChungBangDiem" as const,
                      required: true,
                    },
                    {
                      label: "Giấy khai sinh",
                      name: "minhChungGiayKhaiSinh" as const,
                      required: true,
                    },
                    {
                      label: "Giấy tờ ưu tiên (nếu có)",
                      name: "minhChungUuTien" as const,
                      required: false,
                    },
                  ].map((item, index) => {
                    return (
                      <TableRow key={item.name}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          {item.label}
                          {item.required ? <RequiredMark /> : null}
                        </TableCell>
                        <TableCell>
                          <PdfUploadField name={item.name} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <p className="mt-4 text-sm font-bold text-red-600 uppercase">
                Lưu ý: Scan minh chứng thành file PDF, dung lượng không quá 5MB
              </p>
            </Section>

            <div className="flex justify-center">
              <Button
                className="h-11 min-w-44 bg-green-700 px-8 font-semibold text-white hover:bg-green-800"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  "Nộp hồ sơ"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
