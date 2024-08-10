// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lproto/event/long_running_task/status_v1.proto
// Protobuf C++ Version: 4.25.0

#ifndef GOOGLE_PROTOBUF_INCLUDED_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto_2epb_2eh
#define GOOGLE_PROTOBUF_INCLUDED_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto_2epb_2eh

#include <limits>
#include <string>
#include <type_traits>
#include <utility>

#include "google/protobuf/port_def.inc"
#if PROTOBUF_VERSION < 4025000
#error "This file was generated by a newer version of protoc which is"
#error "incompatible with your Protocol Buffer headers. Please update"
#error "your headers."
#endif  // PROTOBUF_VERSION

#if 4025000 < PROTOBUF_MIN_PROTOC_VERSION
#error "This file was generated by an older version of protoc which is"
#error "incompatible with your Protocol Buffer headers. Please"
#error "regenerate this file with a newer version of protoc."
#endif  // PROTOBUF_MIN_PROTOC_VERSION
#include "google/protobuf/port_undef.inc"
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/arena.h"
#include "google/protobuf/arenastring.h"
#include "google/protobuf/generated_message_tctable_decl.h"
#include "google/protobuf/generated_message_util.h"
#include "google/protobuf/metadata_lite.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/message.h"
#include "google/protobuf/repeated_field.h"  // IWYU pragma: export
#include "google/protobuf/extension_set.h"  // IWYU pragma: export
#include "google/protobuf/unknown_field_set.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"

#define PROTOBUF_INTERNAL_EXPORT_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto

namespace google {
namespace protobuf {
namespace internal {
class AnyMetadata;
}  // namespace internal
}  // namespace protobuf
}  // namespace google

// Internal implementation detail -- do not use these members.
struct TableStruct_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto {
  static const ::uint32_t offsets[];
};
extern const ::google::protobuf::internal::DescriptorTable
    descriptor_table_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto;
namespace lproto {
namespace event {
namespace long_running_task {
class StatusV1;
struct StatusV1DefaultTypeInternal;
extern StatusV1DefaultTypeInternal _StatusV1_default_instance_;
}  // namespace long_running_task
}  // namespace event
}  // namespace lproto
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google

namespace lproto {
namespace event {
namespace long_running_task {

// ===================================================================


// -------------------------------------------------------------------

class StatusV1 final :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:lproto.event.long_running_task.StatusV1) */ {
 public:
  inline StatusV1() : StatusV1(nullptr) {}
  ~StatusV1() override;
  template<typename = void>
  explicit PROTOBUF_CONSTEXPR StatusV1(::google::protobuf::internal::ConstantInitialized);

  inline StatusV1(const StatusV1& from)
      : StatusV1(nullptr, from) {}
  StatusV1(StatusV1&& from) noexcept
    : StatusV1() {
    *this = ::std::move(from);
  }

  inline StatusV1& operator=(const StatusV1& from) {
    CopyFrom(from);
    return *this;
  }
  inline StatusV1& operator=(StatusV1&& from) noexcept {
    if (this == &from) return *this;
    if (GetArena() == from.GetArena()
  #ifdef PROTOBUF_FORCE_COPY_IN_MOVE
        && GetArena() != nullptr
  #endif  // !PROTOBUF_FORCE_COPY_IN_MOVE
    ) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  inline const ::google::protobuf::UnknownFieldSet& unknown_fields() const
      ABSL_ATTRIBUTE_LIFETIME_BOUND {
    return _internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance);
  }
  inline ::google::protobuf::UnknownFieldSet* mutable_unknown_fields()
      ABSL_ATTRIBUTE_LIFETIME_BOUND {
    return _internal_metadata_.mutable_unknown_fields<::google::protobuf::UnknownFieldSet>();
  }

  static const ::google::protobuf::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::google::protobuf::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::google::protobuf::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const StatusV1& default_instance() {
    return *internal_default_instance();
  }
  static inline const StatusV1* internal_default_instance() {
    return reinterpret_cast<const StatusV1*>(
               &_StatusV1_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(StatusV1& a, StatusV1& b) {
    a.Swap(&b);
  }
  inline void Swap(StatusV1* other) {
    if (other == this) return;
  #ifdef PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetArena() != nullptr &&
        GetArena() == other->GetArena()) {
   #else  // PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetArena() == other->GetArena()) {
  #endif  // !PROTOBUF_FORCE_COPY_IN_SWAP
      InternalSwap(other);
    } else {
      ::google::protobuf::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(StatusV1* other) {
    if (other == this) return;
    ABSL_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  StatusV1* New(::google::protobuf::Arena* arena = nullptr) const final {
    return CreateMaybeMessage<StatusV1>(arena);
  }
  using ::google::protobuf::Message::CopyFrom;
  void CopyFrom(const StatusV1& from);
  using ::google::protobuf::Message::MergeFrom;
  void MergeFrom( const StatusV1& from) {
    StatusV1::MergeImpl(*this, from);
  }
  private:
  static void MergeImpl(::google::protobuf::Message& to_msg, const ::google::protobuf::Message& from_msg);
  public:
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  ::size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::google::protobuf::internal::ParseContext* ctx) final;
  ::uint8_t* _InternalSerialize(
      ::uint8_t* target, ::google::protobuf::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const { return _impl_._cached_size_.Get(); }

  private:
  ::google::protobuf::internal::CachedSize* AccessCachedSize() const final;
  void SharedCtor(::google::protobuf::Arena* arena);
  void SharedDtor();
  void InternalSwap(StatusV1* other);

  private:
  friend class ::google::protobuf::internal::AnyMetadata;
  static ::absl::string_view FullMessageName() {
    return "lproto.event.long_running_task.StatusV1";
  }
  protected:
  explicit StatusV1(::google::protobuf::Arena* arena);
  StatusV1(::google::protobuf::Arena* arena, const StatusV1& from);
  public:

  static const ClassData _class_data_;
  const ::google::protobuf::Message::ClassData*GetClassData() const final;

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kIdFieldNumber = 1,
    kTotalFieldNumber = 2,
    kProcessedFieldNumber = 3,
  };
  // string id = 1;
  void clear_id() ;
  const std::string& id() const;
  template <typename Arg_ = const std::string&, typename... Args_>
  void set_id(Arg_&& arg, Args_... args);
  std::string* mutable_id();
  PROTOBUF_NODISCARD std::string* release_id();
  void set_allocated_id(std::string* value);

  private:
  const std::string& _internal_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_id(
      const std::string& value);
  std::string* _internal_mutable_id();

  public:
  // int32 total = 2;
  void clear_total() ;
  ::int32_t total() const;
  void set_total(::int32_t value);

  private:
  ::int32_t _internal_total() const;
  void _internal_set_total(::int32_t value);

  public:
  // int32 processed = 3;
  void clear_processed() ;
  ::int32_t processed() const;
  void set_processed(::int32_t value);

  private:
  ::int32_t _internal_processed() const;
  void _internal_set_processed(::int32_t value);

  public:
  // @@protoc_insertion_point(class_scope:lproto.event.long_running_task.StatusV1)
 private:
  class _Internal;

  friend class ::google::protobuf::internal::TcParser;
  static const ::google::protobuf::internal::TcParseTable<
      2, 3, 0,
      50, 2>
      _table_;
  friend class ::google::protobuf::MessageLite;
  friend class ::google::protobuf::Arena;
  template <typename T>
  friend class ::google::protobuf::Arena::InternalHelper;
  using InternalArenaConstructable_ = void;
  using DestructorSkippable_ = void;
  struct Impl_ {

        inline explicit constexpr Impl_(
            ::google::protobuf::internal::ConstantInitialized) noexcept;
        inline explicit Impl_(::google::protobuf::internal::InternalVisibility visibility,
                              ::google::protobuf::Arena* arena);
        inline explicit Impl_(::google::protobuf::internal::InternalVisibility visibility,
                              ::google::protobuf::Arena* arena, const Impl_& from);
    ::google::protobuf::internal::ArenaStringPtr id_;
    ::int32_t total_;
    ::int32_t processed_;
    mutable ::google::protobuf::internal::CachedSize _cached_size_;
    PROTOBUF_TSAN_DECLARE_MEMBER
  };
  union { Impl_ _impl_; };
  friend struct ::TableStruct_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto;
};

// ===================================================================




// ===================================================================


#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// StatusV1

// string id = 1;
inline void StatusV1::clear_id() {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  _impl_.id_.ClearToEmpty();
}
inline const std::string& StatusV1::id() const
    ABSL_ATTRIBUTE_LIFETIME_BOUND {
  // @@protoc_insertion_point(field_get:lproto.event.long_running_task.StatusV1.id)
  return _internal_id();
}
template <typename Arg_, typename... Args_>
inline PROTOBUF_ALWAYS_INLINE void StatusV1::set_id(Arg_&& arg,
                                                     Args_... args) {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  ;
  _impl_.id_.Set(static_cast<Arg_&&>(arg), args..., GetArena());
  // @@protoc_insertion_point(field_set:lproto.event.long_running_task.StatusV1.id)
}
inline std::string* StatusV1::mutable_id() ABSL_ATTRIBUTE_LIFETIME_BOUND {
  std::string* _s = _internal_mutable_id();
  // @@protoc_insertion_point(field_mutable:lproto.event.long_running_task.StatusV1.id)
  return _s;
}
inline const std::string& StatusV1::_internal_id() const {
  PROTOBUF_TSAN_READ(&_impl_._tsan_detect_race);
  return _impl_.id_.Get();
}
inline void StatusV1::_internal_set_id(const std::string& value) {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  ;
  _impl_.id_.Set(value, GetArena());
}
inline std::string* StatusV1::_internal_mutable_id() {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  ;
  return _impl_.id_.Mutable( GetArena());
}
inline std::string* StatusV1::release_id() {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  // @@protoc_insertion_point(field_release:lproto.event.long_running_task.StatusV1.id)
  return _impl_.id_.Release();
}
inline void StatusV1::set_allocated_id(std::string* value) {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  _impl_.id_.SetAllocated(value, GetArena());
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        if (_impl_.id_.IsDefault()) {
          _impl_.id_.Set("", GetArena());
        }
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  // @@protoc_insertion_point(field_set_allocated:lproto.event.long_running_task.StatusV1.id)
}

// int32 total = 2;
inline void StatusV1::clear_total() {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  _impl_.total_ = 0;
}
inline ::int32_t StatusV1::total() const {
  // @@protoc_insertion_point(field_get:lproto.event.long_running_task.StatusV1.total)
  return _internal_total();
}
inline void StatusV1::set_total(::int32_t value) {
  _internal_set_total(value);
  // @@protoc_insertion_point(field_set:lproto.event.long_running_task.StatusV1.total)
}
inline ::int32_t StatusV1::_internal_total() const {
  PROTOBUF_TSAN_READ(&_impl_._tsan_detect_race);
  return _impl_.total_;
}
inline void StatusV1::_internal_set_total(::int32_t value) {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  ;
  _impl_.total_ = value;
}

// int32 processed = 3;
inline void StatusV1::clear_processed() {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  _impl_.processed_ = 0;
}
inline ::int32_t StatusV1::processed() const {
  // @@protoc_insertion_point(field_get:lproto.event.long_running_task.StatusV1.processed)
  return _internal_processed();
}
inline void StatusV1::set_processed(::int32_t value) {
  _internal_set_processed(value);
  // @@protoc_insertion_point(field_set:lproto.event.long_running_task.StatusV1.processed)
}
inline ::int32_t StatusV1::_internal_processed() const {
  PROTOBUF_TSAN_READ(&_impl_._tsan_detect_race);
  return _impl_.processed_;
}
inline void StatusV1::_internal_set_processed(::int32_t value) {
  PROTOBUF_TSAN_WRITE(&_impl_._tsan_detect_race);
  ;
  _impl_.processed_ = value;
}

#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)
}  // namespace long_running_task
}  // namespace event
}  // namespace lproto


// @@protoc_insertion_point(global_scope)

#include "google/protobuf/port_undef.inc"

#endif  // GOOGLE_PROTOBUF_INCLUDED_lproto_2fevent_2flong_5frunning_5ftask_2fstatus_5fv1_2eproto_2epb_2eh